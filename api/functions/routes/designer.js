const express = require('express');
const designerApp = express();

const cors = require('cors')({
    origin: true,
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin'],
    credentials: true
});

const Designer = require('../models/designer');


designerApp.use(cors);

designerApp.get('/', (req, res) => {
    Designer.find({})
        .then((designers) => {
            return res.status(200).send(designers);
        }).catch((e) => {
            return res.status(500).send({
                error: {
                    error: e.message
                }
            });
        })
});

designerApp.post('/', (req, res) => {
    Designer.create(req.body)
        .then((designer) => {
            return res.status(200).send(designer);
        }).catch((e) => {
            return res.status(500).send({
                error: {
                    error: e.message
                }
            });
        });
});

designerApp.put('/:id', (req, res) => {
    Designer.findOneAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(() => {
            return Designer.findOne({
                _id: req.params.id
            }).then((designer) => {
                return res.status(200).send(designer);
            }).catch((e) => {
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            });
        }).catch((e) => {
            return res.status(500).send({
                error: {
                    error: e.message
                }
            });
        });
});

designerApp.delete('/:id', (req, res) => {
    Designer.findOneAndDelete({
        _id: req.params.id
    }).then((designer) => {
        return res.status(200).send(designer);
    }).catch((e) => {
        return res.status(500).send({
            error: {
                error: e.message
            }
        });
    });
});

// designerApp.delete('/', (req, res) => {
//    Designer.find({})
//             .then((users) => {

//                 console.log(users);
//                 for (var i = 0; i < users.length; i++) {
//    var usert= users[i]
//    console.log(usert.id);

               
//                 Designer.findOneAndDelete({
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
    designerApp
};