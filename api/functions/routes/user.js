const express = require('express');
const User = require('../models/user');
var stripe = require('stripe')('sk_test_Xm73aTMvwE6DDcXsEVj33DVw'); //secret key

const cors = require('cors')({
    origin: true,
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin'],
    credentials: true
});

const emailUtil = require('../email-util');
const EmailService = emailUtil;
const constants = require('../constants');

const handlebars = require('handlebars');

const fs = require('fs'); // file system

const userApp = express();
userApp.use(cors);

userApp.get('/:id?', (req, res) => {
    const id = req.params.id;
    console.log(id);
    if (id) {
        User.find({
            _id: id
        }).then((users) => {
            console.log(users);
            return res.status(200).send(users);
        }).catch((e) => {
            return res.status(500).send({
                error: {
                    error: e.message
                }
            });
        })
    } else {
        User.find({})
            .then((users) => {

                console.log(users);

          return res.status(200).send(users);
            }).catch((e) => {
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            })
    }
});
userApp.get('/byemail/:id?', (req, res) => {
    const id = req.params.id;
    console.log(id);
    if (id) {
        User.find({
            email: id
        }).then((users) => {
            console.log(users);
            return res.status(200).send(users);
        }).catch((e) => {
            return res.status(500).send({
                error: {
                    error: e.message
                }
            });
        })
    } else {
        User.find({})
            .then((users) => {

                console.log(users);

          return res.status(200).send(users);
            }).catch((e) => {
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            })
    }
});

userApp.get('/getcustomer/:id?', (req, res) => {
  var id=req.params.id;
return stripe.customers.retrieve(
  id,
  function(err, customer) {
    // asynchronously called
     if (err){
                console.log("error listing customer");

                console.log(err);
              return res.status(500).send({
                    error: err.message
                });
          }
            else {
                 return res.status(200).send(customer);

            }
  }
);

});
userApp.post('/', (req, res) => {
    User.findOne({
        email: req.body.email
    }).then((user) => {
        if (user) {
            if (req.body.source === "facebook" || req.body.source === "google") {
                return res.status(200).send(user);
            } else {
                res.status(204).send(user);
            }
        } else {
            var body=req.body;
              //body["type"]=req.body.source;
              //body.source=null;
            User.create(body).then((user) => {
                fs.readFile("./email-templates/new-user.html", {
                    encoding: 'utf-8'
                }, (err, html) => {
                    if (err) {
                        throw err;
                    } else {
                        const template = handlebars.compile(html);
                        const replacements = {
                            api_url: constants.LOGO,
                            firstname: user.name,
                        };
                        const htmlToSend = template(replacements);
                        EmailService.sendText(user.email, "Snap2Vector Registration", "", htmlToSend, "")
                            .then(() => {
                                return res.status(200).send(user);
                            })
                            .catch((err) => {
                                return res.status(500).send({
                                    error: err.message
                                });
                            })
                    }
                });
                return;
            }).catch((e) => {
                res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
                throw e;
            });
        }
        return;
    }).catch((e) => {
        res.status(500).send({
            error: {
                error: e.message
            }
        });
    })
});

userApp.put('/:id', (req, res) => {
    console.log(req.params.id);
     console.log(req.body);
     // var pam=req.body;
     // var key = Object.keys(pam);
     //  console.log(key);
     // var val = Object.values(pam);
     // var tkey= key[0];
     // var tval= val[0];
     // console.log(key[0]);
     //  console.log(val[0]);
    User.findOneAndUpdate({
            _id: req.params.id
        },req.body
        // {
        //             $set: {
        //              source:req.body.source
        //             }
        //         }
                 )
        .then(() => {
            return User.findOne({
                _id: req.params.id
            }).then((user) => {
                console.log(user);
                return res.status(200).send(user);
            }).catch((e) => {
                console.log(e);
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            })
        }).catch((e) => {
            res.status(500).send({
                error: {
                    error: e.message
                }
            });
        })
});
userApp.put('/phone/:id', (req, res) => {
   // console.log(req.params.id);
     console.log(req.body);
     var pam=req.body;
    User.findOneAndUpdate({
            _id: req.params.id
        }, {
                    $set: {
                     phone :req.body.phone
                    }
                })
        .then(() => {
            return User.findOne({
                _id: req.params.id
            }).then((user) => {
                console.log(user);
                return res.status(200).send(user);
            }).catch((e) => {
                console.log(e);
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            })
        }).catch((e) => {
            res.status(500).send({
                error: {
                    error: e.message
                }
            });
        })
});
userApp.put('/company/:id', (req, res) => {
   // console.log(req.params.id);
     console.log(req.body);
     var pam=req.body;
    User.findOneAndUpdate({
            _id: req.params.id
        }, {
                    $set: {
                     company :req.body.company
                    }
                })
        .then(() => {
            return User.findOne({
                _id: req.params.id
            }).then((user) => {
                console.log(user);
                return res.status(200).send(user);
            }).catch((e) => {
                console.log(e);
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            })
        }).catch((e) => {
            res.status(500).send({
                error: {
                    error: e.message
                }
            });
        })
});

userApp.put('/updatecard/:id', (req, res) => {
  console.log("update");
    User.findOneAndUpdate({
                _id: req.params.id
            },req.body).then(() => {

           return   User.findOne({
                _id: req.params.id
            }).then((user) => {

               // console.log(user);

             return   stripe.customers.createSource(user.cus_id, {
                      source: user.source.id,
                    }).then(()=>{
                         console.log("user card updated successfully");
                   return     stripe.customers.update(user.cus_id, {
                              default_source: user.source.id
                            }).then(()=>{
                                console.log("user card set to default ");
                              return res.status(200).send(user);

                            }).catch((e) => {
                                console.log(e);
                            console.log("user card not updated");
                                return res.status(500).send({
                                    error: {
                                        error: e.message
                                    }
                                });
                            })

                        //return res.status(200).send(user);

                    }).catch((e) => {
                console.log(e);
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            })

                
            }).catch((e) => {
                console.log(e);
                return res.status(500).send({
                    error: {
                        error: e.message
                    }
                });
            })



                }).catch((e) => {
            res.status(500).send({
                error: {
                    error: e.message
                }
            });
        })



});

userApp.delete('/:id', (req, res) => {
    console.log(req.params.id);
    User.findOneAndDelete({
            _id: req.params.id
        })
        .then((user) => {
            return res.status(200).send(user);
        }).catch((e) => {
            console.log(e);
            res.status(500).send({
                error: {
                    error: e.message
                }
            });
        });
});

// userApp.delete('/', (req, res) => {
//    User.find({})
//             .then((users) => {

//                 console.log(users);
//                 for (var i = 0; i < users.length; i++) {
//    var usert= users[i]
//    console.log(usert.email);

               
//                 User.findOneAndDelete({
//             email: usert.email
//         })
//         .then((user) => {
//             console.log(user);
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
    userApp
};