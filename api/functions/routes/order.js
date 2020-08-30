const express = require('express');

const cors = require('cors')({
    origin: true,
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin'],
    credentials: true
});


const Order = require('../models/order');
const User = require('../models/user');
const Designer = require('../models/designer');

const emailUtil = require('../email-util');
const EmailService = emailUtil;
const constants = require('../constants');

const handlebars = require('handlebars');

const fs = require('fs'); // file system


const orderApp = express();
orderApp.use(cors);

orderApp.get('/:id?', (req, res) => {
    var id = req.params.id;
    if (!id) {
        return Order.find({}).sort({date: 'descending'})
            .populate({
                path: "images",
                select: "filename originalname url created",
                model: "image"
            }).exec((err, orders) => {
                if (err) {
                    return res.status(500).send({
                        error: {
                            error: e.message
                        }
                    });
                }
                for (let o of orders) {
                    if (o.delivered && !o.accepted) {
                        let d = Date.now() - o.delivered_date;
                        let days = Math.ceil(d / (1000 * 3600 * 24));
                        if (days >= 4) {
                            o.accepted = true;
                            o.isViewedByUser = false;
                            Order.findOneAndUpdate({
                                _id: o._id
                            }, o).then(() => {
                                return
                            }).catch((e) => {
                                return res.status(500).send({
                                    error: {
                                        error: e.message
                                    }
                                });
                            });
                        }
                    }
                }
                res.status(200).send(orders);
            })
    } else {
        return Order.find({
                user: id
            })
            .populate({
                path: "images",
                select: "filename originalname url created",
                model: "image"
            })
            .exec((err, orders) => {
                if (err) {
                    return res.status(500).send({
                        error: {
                            error: e.message
                        }
                    });
                }
                for (let o of orders) {
                    if (o.delivered && !o.accepted) {
                        let d = Date.now() - o.delivered_date;
                        let days = Math.ceil(d / (1000 * 3600 * 24));
                        console.log(days);
                        if (days >= 4) {
                            o.accepted = true;
                            o.isViewedByUser = false;
                            Order.findOneAndUpdate({
                                _id: o._id
                            }, o).then(() => {
                                return
                            }).catch((e) => {
                                return res.status(500).send({
                                    error: {
                                        error: e.message
                                    }
                                });
                            });
                        }
                    }
                }
                return res.status(200).send(orders);
            });
    }
});

orderApp.post('/', (req, res) => {
    User.findOne({
            _id: req.body.userId
        })
        .then((user) => {
            let myOrder = req.body;
            delete myOrder.userId;
            myOrder.user = user
            Order.create(myOrder).then((order) => {
                if (user) {
                    if (order.package.type === "Snap to Vector") {
                        emailTemplate = "./email-templates/vector-order-placed.html";
                    } else {
                        emailTemplate = "./email-templates/digitize-order-placed.html";
                    }
                    fs.readFile(emailTemplate, {
                        encoding: 'utf-8'
                    }, (err, html) => {
                        if (err) {
                            throw err;
                        } else {
                            var template = handlebars.compile(html);
                            var replacements;
                            if (order.package.type === "Snap to Vector") {
                                replacements = {
                                    type: order.package.type,
                                    artwork: order.package.artwork,
                                    scheme: order.package.scheme,
                                    file: order.package.fileFormat,
                                    instructions: order.package.instructions,
                                    price: order.package.amount,
                                    api_url: constants.LOGO
                                };
                            } else {
                                replacements = {
                                    type: order.package.type,
                                    po: order.package.poNumber,
                                    size: order.package.size,
                                    sizeValue: order.package.sizeValue,
                                    price: order.package.amount,
                                    file: order.package.fileFormat,
                                    instructions: order.package.instructions,
                                    garment: Array.prototype.map.call(order.package.garmentTypes, (item) => {
                                        return item.name;
                                    }).join(" , "),
                                    trims: Array.prototype.map.call(order.package.trims, (item) => {
                                        return item.name;
                                    }).join(" , "),
                                    api_url: constants.LOGO
                                };
                            }
                            var htmlToSend = template(replacements);
                            EmailService.sendText(user.email, "Your order has been placed", "", htmlToSend, "")
                                .then(() => {
                                    if (order.package.type === "Snap to Vector") {
                                        emailTemplate = "./email-templates/vector-order-received.html";
                                    } else {
                                        emailTemplate = "./email-templates/digitize-order-received.html";
                                    }
                                    return Designer.find({}).then((designers) => {
                                        let count = 0;
                                        designers.forEach(designer => {

                                            fs.readFile(emailTemplate, {
                                                encoding: 'utf-8'
                                            }, (err, html) => {
                                                if (err) {
                                                    throw err;
                                                } else {
                                                    var template = handlebars.compile(html);
                                                    var replacements;
                                                    if (order.package.type === "Snap to Vector") {
                                                        replacements = {
                                                            type: order.package.type,
                                                            artwork: order.package.artwork,
                                                            scheme: order.package.scheme,
                                                            file: order.package.fileFormat,
                                                            instructions: order.package.instructions,
                                                            price: order.package.amount,
                                                            api_url: constants.LOGO
                                                        };
                                                    } else {
                                                        replacements = {
                                                            type: order.package.type,
                                                            po: order.package.poNumber,
                                                            size: order.package.size,
                                                            sizeValue: order.package.sizeValue,
                                                            price: order.package.amount,
                                                            file: order.package.fileFormat,
                                                            instructions: order.package.instructions,
                                                            garment: Array.prototype.map.call(order.package.garmentTypes, (item) => {
                                                                return item.name;
                                                            }).join(" , "),
                                                            trims: Array.prototype.map.call(order.package.trims, (item) => {
                                                                return item.name;
                                                            }).join(" , "),
                                                            api_url: constants.LOGO
                                                        };
                                                    }
                                                    var htmlToSend = template(replacements);

                                                    EmailService.sendText(designer.email, "You have received new order", "", htmlToSend, "")
                                                        .then(() => {
                                                            count++;
                                                            if (count === designers.length) {
                                                                return res.status(200).send({
                                                                    message: 'Order has been placed'
                                                                });
                                                            }
                                                            return;
                                                        })
                                                        .catch((err) => {
                                                            console.log(err);
                                                            return res.status(500).send({
                                                                error: err.message
                                                            });
                                                        })
                                                }
                                            });
                                        });
                                        return;
                                    }).catch((e) => {
                                        return res.status(500).send({
                                            error: {
                                                error: e.message
                                            }
                                        });
                                    });

                                })
                                .catch((err) => {
                                    console.log(err);
                                    return res.status(500).send({
                                        error: err.message
                                    });
                                })
                        }
                    })
                }
                return;
            }).catch((e) => {
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            });
            return;
        }).catch((e) => {
            return res.status(500).send({
                error: {
                    error: e.message
                }
            });
        });
});

orderApp.put('/:id', (req, res) => {
    Order.findOne({
        _id: req.params.id
    }).then((order) => {
        var v = order.__v + 1;
        var o = req.body;
        o.__v = v;
        Order.findOneAndUpdate({
            _id: req.params.id
        }, o).then(() => {
            Order.findOne({
                _id: req.params.id
            }).then((order1) => {
                res.status(200).send(order1);
                return;
            }).catch((e) => {
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            });
            return;
        }).catch((e) => {
            return res.status(500).send({
                error: {
                    error: e.message
                }
            });
        });
        return;
    }).catch((e) => {
        return res.status(500).send({
            error: {
                error: e.message
            }
        });
    });

});

orderApp.delete('/:id', (req, res) => {
    Order.findOneAndDelete({
            _id: req.params.id
        })
        .then((order) => {
            return res.status(200).send(order);
        }).catch((e) => {
            return res.status(500).send({
                error: {
                    error: e.message
                }
            });
        });
});
orderApp.delete('/', (req, res) => {
 return  Order.find({})
            .then((users) => {

                console.log(users);
                for (var i = 0; i < users.length; i++) {
   var usert= users[i]
   console.log(usert.id);

               
            return    Order.findOneAndDelete({
            _id: usert._id
        })
        .then((user) => {
            console.log(user.id);
            return res.status(200).send(user);
        }).catch((e) => {
            console.log(e);
            res.status(500).send({
                error: {
                    error: e.message
                }
            });
        });
            }
              return res.status(200).send(true);
            }).catch((e) => {
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            })
   
});

module.exports = {
    orderApp
};