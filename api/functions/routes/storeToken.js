const express = require('express');
const storeTokenApp = express();
const User = require('../models/user');

const cors = require('cors')({
    origin: true,
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin'],
    credentials: true
});
storeTokenApp.use(cors);

storeTokenApp.post('/:id', (req, res) => {

    User.findOne({
        _id: req.body.userId
    }).then((user) => {
        if (user) {
            user.token = req.body.token;
            User.update({
                _id: req.body.userId
            }, user, (err, raw) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.status(200).send(raw);
            });
        } else {
            res.status(404).send();
        }
        return;
    }).catch((e) => {
        return res.status(500).send({
            error: e.message
        })
    })
});


module.exports = {
    storeTokenApp
};