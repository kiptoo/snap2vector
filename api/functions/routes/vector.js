const express = require('express');
const vectorApp = express();
const Vector = require('../models/vector');
const Order = require('../models/order');
const User = require('../models/user');

const cors = require('cors')({
    origin: true,
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin'],
    credentials: true
});
vectorApp.use(cors);

const handlebars = require('handlebars');
var FCM = require('fcm-node');
var serverKey = 'AAAA22HnGLY:APA91bEmLwtfZkk4br3c9u3ycLY4nc32a3AcSE0dMe6mxiOtf4lw1aTk_9obQJsSmVFu4uILmbyyBqJlU4krrkALk8R-4k3vJnW-8MT3xtzHdsc8IMNNGXq3YpsRsCTNG-kgmAY3NIYl'; //put your server key here
var fcm = new FCM(serverKey);
const constants = require('../constants');
const emailUtil = require('../email-util');
const EmailService = emailUtil;

vectorApp.get('/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {
        Vector.find({})
            .populate({
                path: "order",
                model: "order"
            })
            .populate({
                path: "designer",
                select: "name email source",
                model: "designer"
            })
            .then((vectors) => {
                return res.status(200).send(vectors);
            }).catch((e) => {
                return res.status(500).send({
                    error: e.message
                });
            })
    } else {
        Vector.find({
                order: id
            })
            .populate({
                path: "order",
                model: "order"
            })
            .populate({
                path: "designer",
                select: "name email source",
                model: "designer"
            })
            .then((vectors) => {
                return res.status(200).send(vectors);
            }).catch((e) => {
                res.status(500).send({
                    error: e.message
                });
            })
    }
});

vectorApp.post('/', (req, res) => {
    if (!req.body) {
        console.log("no image");
        return res.status(400).send('No files were uploaded.');
    }
    let files = req.body;
    Order.findOne({
        _id: files[0].order
    }).then((order) => {
        if (order) {
            order.delivered = true;
            order.delivered_date = Date.now();
            return Order.findOneAndUpdate({
                _id: order._id
            }, order).then(() => {
                files.forEach(file => {
                    var vector = new Vector();
                    vector.filename = file.name;
                    vector.originalname = file.originalname;
                    vector.created = Date.now();
                    vector.url = file.url
                    vector.order = file.order;
                    //vector.designer=mongoose.Types.ObjectId(designerId);

                    vector.save(err => {
                        if (err) {
                            console.log("error in vector.save : " + err);
                            return res.sendStatus(400);
                        }
                    });
                });
                return User.findOne({
                    _id: order.user
                }).then((user) => {
                    if (user) {
                        res.status(200).send({
                            success: true
                        })
                        var message;
                        if (order.package.type === "Snap to Vector") {
                            message = {
                                to: user.token,
                                notification: {
                                    title: 'Order delivered',
                                    body: 'Your Snap2vector order is delivered',
                                    icon: "notification_icon"
                                },
                            };
                        } else {
                            message = {
                                to: user.token,
                                notification: {
                                    title: 'Order delivered',
                                    body: 'Your Snap2digitize is delivered',
                                    icon: "notification_icon"
                                },
                            };
                        }

                        return fcm.send(message, (err) => {
                            if (err) {
                                console.log("Something has gone wrong!");
                                res.status(500).send({
                                    error: err.message
                                });
                            } else {
                                fs.readFile("./email-templates/notification.html", {
                                    encoding: 'utf-8'
                                }, (err, html) => {
                                    if (err) {
                                        throw err;
                                    } else {
                                        var template = handlebars.compile(html);
                                        var replacements = {
                                            api_url: constants.LOGO,
                                            title: 'Order delivered',
                                            description: message.notification.body
                                        };
                                        var htmlToSend = template(replacements);
                                        EmailService.sendText(user.email, 'Order delivered', "", htmlToSend, "")
                                            .then(() => {
                                                console.log("email success");
                                                return res.status(200).send("files uploaded");
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                                return res.status(500).send({
                                                    error: err.message
                                                });
                                            })
                                    }
                                });
                            }
                        });
                    }
                    return;
                }).catch((e) => {
                    res.status(500).send({
                        error: e.message
                    });
                });
            }).catch((e) => {
                res.status(500).send({
                    error: e.message
                });
            });
        } else
            console.log("order not found");
        return
    }).catch((e) => {
        res.status(500).send({
            error: e.message
        });
    })
});

vectorApp.put('/:id', (req, res) => {
    Vector.findOneAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(() => {
            return Vector.findOne({
                    _id: req.params.id
                })
                .then((vector) => {
                    return res.status(200).send(vector);
                }).catch((e) => {
                    res.status(500).send({
                        error: e.message
                    });
                })
        }).catch((e) => {
            res.status(500).send({
                error: e.message
            });
        })
});

vectorApp.delete('/:id', (req, res) => {
    Vector.findOneAndDelete({
            _id: req.params.id
        })
        .then((vector) => {
            return res.status(200).send(vector);
        }).catch((e) => {
            res.status(500).send({
                error: e.message
            });
        })
});

// vectorApp.delete('/', (req, res) => {
//    Vector.find({})
//             .then((users) => {

//                 console.log(users);
//                 for (var i = 0; i < users.length; i++) {
//    var usert= users[i]
//    console.log(usert.id);

               
//                 Vector.findOneAndDelete({
//             _id: usert._id
//         })
//         .then((user) => {
//             console.log(user.id);
//            // return res.status(200).send(user);
//         }).catch((e) => {
//             console.log(e);
//             // res.status(500).send({
//             //     error: {
//             //         error: e.message
//             //     }
//             // });
//         });
//             }
//               //  return res.status(200).send(users);
//             }).catch((e) => {
//                 return res.status(500).send({
//                     error: {
//                         error: e.message
//                     }
//                 });
//             })
   
// });

module.exports = {
    vectorApp
};