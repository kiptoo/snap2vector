const express = require('express');
const imagesApp = express();
const Image = require('../models/image');

const cors = require('cors')({
    origin: true,
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin'],
    credentials: true
});

imagesApp.use(cors);

imagesApp.get('/:id?', (req, res) => {
    const id = req.params.id;
    if (!id) {
        Image.find()
            .populate("user_data", "name email source")
            .then((images) => {
                return res.status(200).send(images);
            }).catch((e) => {
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            });
    } else {
        Image.find({
                user: id
            })
            .populate("user_data", "name email source")
            .then((images) => {
                return res.status(200).send(images);
            }).catch((e) => {
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            });
    }
});

imagesApp.post('/', (req, res) => {

    Image.create(req.body)
        .then((image) => {
            return res.status(200).send(image);
        }).catch((e) => {
            return res.status(500).send({
                error: {
                    error: e.message
                }
            });
        });

});

imagesApp.put('/:id', (req, res) => {

    Image.findOneAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(() => {
            return res.sendStatus(200);
        }).catch((e) => {
            return res.status(500).send({
                error: {
                    error: e.message
                }
            });
        });
});

imagesApp.delete('/:id', (req, res) => {
    Image.findOneAndDelete({
        _id: req.params.id
    }).then((image) => {
        return res.sendStatus(200);
    }).catch((e) => {
        return res.status(500).send({
            error: {
                error: e.message
            }
        });
    });
});

// imagesApp.delete('/', (req, res) => {
//    Image.find({})
//             .then((users) => {

//                 console.log(users);
//                 for (var i = 0; i < users.length; i++) {
//    var usert= users[i]
//    console.log(usert.id);

               
//                 Image.findOneAndDelete({
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
    imagesApp
};