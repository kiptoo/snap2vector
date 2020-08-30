const express = require('express');
const notificationsApp = express();

const EZTEXTING_USER = "nomana123";
const EZTEXTING_PASSWORD = "TRFb8AxnihPvk3f";

const fs = require('fs'); // file system
var FCM = require('fcm-node');
 var serverKey = 'AAAA22HnGLY:APA91bEmLwtfZkk4br3c9u3ycLY4nc32a3AcSE0dMe6mxiOtf4lw1aTk_9obQJsSmVFu4uILmbyyBqJlU4krrkALk8R-4k3vJnW-8MT3xtzHdsc8IMNNGXq3YpsRsCTNG-kgmAY3NIYl'; //put your server key here
//var serverKey ='AIzaSyCTCajlZqWn4iMdYf91Uf-at3xV8-uza30'
var fcm = new FCM(serverKey);

var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

const Order = require('../models/order');
const User = require('../models/user');
const constants = require('../constants');
const Request = require('request')

const emailUtil = require('../email-util');
const EmailService = emailUtil;
const handlebars = require('handlebars');

const cors = require('cors')({
    origin: true,
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin'],
    credentials: true
});

notificationsApp.use(cors);


// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "<your database URL here>"
// });

notificationsApp.put('/:id', (req, res) => {
    console.log("in notification  ");
     console.log(req.body.orderId);
    var title = 'Order update';
    var orderId = req.params.id;
    var description = req.body.description;

    Order.findOne({
        _id: orderId
    }).then((order) => {
        console.log(order);
        if (order) {
            User.findOne({
                _id: order.user
            }).then((user) => {
                if (user) {
                    var message = {
                        //to: user.token,
                        notification: {
                            title: 'Order update',
                            body: description,
                            sound:"default",
                            click_action:"FCM_PLUGIN_ACTIVITY",
                            icon:"fcm_push_icon"
                           // icon: "notification_icon"
                        }
                    };
                     var options = {
                  priority: "high",
                  timeToLive: 60 * 60 *24
                };

                    var url = "https://app.eztexting.com/api/sending/?user=" + EZTEXTING_USER + "&pass=" + EZTEXTING_PASSWORD + "&phonenumber=" + user.phone + "&subject=" + message.notification.title + "&message=" + message.notification.description + "&express=1&_ga=2.5641139.1270962510.1540106937-554730907.1540106937"
                    Request.get(url)
                        .on('response', (response) => {
                            console.log(response.statusCode);
                        });
                   // fcm.send(message, (err) => {
        admin.messaging().sendToDevice(user.token, message, options).then(function(message) {
                     
                            fs.readFile(",/email-templates/notification.html", {
                                encoding: 'utf-8'
                            }, (err, html) => {
                                if (err) {
                                    console.log(err);
                                    throw err;
                                } else {
                                    var template = handlebars.compile(html);
                                    var replacements = {
                                        api_url: constants.LOGO,
                                        title: title,
                                        description: description
                                    };
                                    var htmlToSend = template(replacements);
                                    EmailService.sendText(user.email, title, "", htmlToSend, "")
                                        .then(() => {
                                            console.log("email success");
                                            return res.sendStatus(200);
                                        })
                                        .catch((err) => {
                                            console.log(err);
                                            return res.status(500).send({
                                                error: err.message
                                            });
                                        })
                                }
                                return;
                            }).catch((err) => {
                                console.log(err);
                                return res.status(500).send({
                                    error: err.message
                                });
                            })
                        
                        return;
                    }).catch(function(error) {
                        console.log("Error sending message:", error);
                      });

                }
                return;
            }).catch((err) => {
                console.log(err);
                return res.status(500).send({
                    error: err.message
                });
            })
        }
        return;
    }).catch((err) => {
        console.log(err);
        return res.status(500).send({
            error: err.message
        });
    })
});

notificationsApp.post('/topic/:id', (req, res) => {
    var topic = req.params.id;
      var message = {
                        //to: user.token,
                        notification: {
                            title: req.body.title,
                            body: req.body.message,
                            sound:"default",
                            click_action:"FCM_PLUGIN_ACTIVITY",
                            icon:"fcm_push_icon"

                           // icon: "notification_icon"
                        }
                         
                    };
                //  var options = {
                //   priority: "high",
                //   timeToLive: 60 * 60 *24
                // };

admin.messaging().sendToTopic(topic,message).then(function(response) {
   

    console.log("Successfully sent message:", response);
    return res.status(200).send({
            msg: response
        });
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
     return res.status(500).send({
            error: err.message
        });
  });


});

module.exports = {
    notificationsApp
};