const express = require('express');
const revisionApp = express();
const Order = require('../models/order');
const Designer = require('../models/designer');

const emailUtil = require('../email-util');
const EmailService = emailUtil;
const constants = require('../constants');

const cors = require('cors')({
    origin: true,
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin'],
    credentials: true
});
revisionApp.use(cors);


revisionApp.post('/', (req, res) => {
    var orderObj = JSON.parse(req.body.order);
    let instruction = orderObj.instructions;
    let imageFile = req.files.image;
    var fileName = Date.now() + "-" + imageFile.name;
    let path = 'static/images/user-uploads/' + fileName;
    imageFile.mv(path, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        let imageUrl = req.protocol + '://' + req.get('host') + '/images/user-uploads/' + fileName;

        Order.findOne({
            _id: orderObj._id
        }).then((order) => {
            order.revisionRequested = true;
            order.delivered = false;
            Order.findOneAndUpdate({
                _id: orderObj._id
            }, order).then(() => {
                fs.readFile("./email-templates/order-revision-requested.html", {
                    encoding: 'utf-8'
                }, (err, html) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        fs.readFile(path, (err, data) => {
                            if (err) {
                                console.log(err);
                                throw err;
                            } else {
                                let base64Image = new Buffer(data, 'binary').toString('base64');

                                var template = handlebars.compile(html);
                                var replacements = {
                                    api_url: constants.LOGO,
                                    instructions: instruction,
                                    date: order.date
                                };
                                var htmlToSend = template(replacements);

                                Designer.find({}).then((designers) => {
                                    let count = 0;
                                    designers.forEach(designer => {
                                        EmailService.sendText(designer.email, "Revision Requested", "", htmlToSend, {
                                                filename: fileName,
                                                content: base64Image,
                                                encoding: 'base64'
                                            })
                                            .then(() => {
                                                count++;
                                                if (count === designers.length) {
                                                    return res.status(200).send(order);
                                                }
                                                return;
                                            }).catch((e) => {
                                                res.status(500).send({
                                                    error: e.message
                                                });
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                                return res.status(500).send({
                                                    error: err.message
                                                });
                                            })
                                    });
                                    return;
                                }).catch((e) => {
                                    res.status(500).send({
                                        error: e.message
                                    });
                                })

                            }
                        });
                    }
                });
                return;
            }).catch((e) => {
                res.status(500).send({
                    error: e.message
                });
            })
            return;
        }).catch((e) => {
            res.status(500).send({
                error: e.message
            });
        })
    })
});

module.exports = {
    revisionApp
};