const express = require('express');
const paymentApp = express();
const Payment = require('../models/payment');
const User = require('../models/user');
const Coupon = require('../models/coupon');
var stripe = require('stripe')('sk_test_Xm73aTMvwE6DDcXsEVj33DVw'); //secret key

const cors = require('cors')({
    origin: true,
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin'],
    credentials: true
});

paymentApp.use(cors);

paymentApp.get('/', (req, res) => {
    Payment.find({})
        .then((payments) => {
            console.log(payments);
           // var users=payments;
  //                      for (var i = 0; i < users.length; i++) {
  //  var usert= users[i]
  // console.log(usert.amount);

               
  //               Payment.findOneAndDelete({
  //           _id: usert._id
  //       })
  //       .then((user) => {

  //          // console.log(user.amount);
  //          // return res.status(200).send(user);
  //       }).catch((e) => {
  //           console.log(e);
  //           // res.status(500).send({
  //           //     error: {
  //           //         error: e.message
  //           //     }
  //           // });
  //       });
  //           }
            return res.status(200).send(payments);
        }).catch((e) => {
            res.status(500).send({
                error: e.message
            });
        })

});

paymentApp.post('/', (req, res) => {
    console.log("in payments post");
    var body = req.body;
    var user = body.user;
    var amountpayable = parseInt(body.amount, 10);
    amountpayable = amountpayable * 100;
    console.log(req.body.tok);
     console.log(user.cus_id);
     if(amountpayable===0){
         console.log("success charging customer,creating new payment");
                            var payment = new Payment();
                            payment.card = req.body.source;
                               payment.customer = user.cus_id;
                            payment.coupon = user.coupon;
                            payment.discount = user.discount;
                            payment.amount = parseInt(req.body.amount, 10);
                            payment.save(err => {
                                if (err) {
                                    //error creating new payment");
                                console.log("error creating new payment");
                                    return res.sendStatus(400);
                                } else {
                                    //success creating new payment");
                             console.log("success creating new payment");
                                    return res.status(200).send({
                                        success: true
                                    });
                                }
                            });
     }
 else{

    if (user && user.cus_id) {
        console.log("customer exists,charging customer");

        return stripe.charges.create({ // check kro
            amount: amountpayable,
            currency: 'usd',
            description: 'Sample transaction',
            //source: req.body.token,
             source: user.source.id,
            customer: user.cus_id
        }, (err, charge) => {
            if (err){
                console.log("error charging customer");

                console.log(err);
              return res.status(500).send({
                    error: err.message
                });
          }
            else {
                console.log("success charging customer");
                console.log(user.discount);

                var payment = new Payment();
                payment.card = user.source;
                payment.customer = user.cus_id;
                payment.coupon = user.coupon;
                payment.discount = user.discount;
                payment.amount = parseInt(req.body.amount, 10);
                payment.save(err => {
                    if (err) {
                        console.log("error adding payment");

                        return res.sendStatus(400);
                    } else {
                        console.log("sucessadding payment");
                        // Coupon.findOneAndUpdate({
                        //     data.id: user.coupon
                        // }, req.body)  
                        return res.status(200).send({
                            success: true
                        });
                    }
                });
            }
        });
    } else {

    console.log("customer does not exist,creating stripe customer");

        stripe.customers.create({
            email: user.email,
            source: user.source.id
        }, (err, customer) => {
             console.log(customer);
            if (err) {
                //error creating stripe customer
                console.log("error creating stripe customer");

                return res.status(500).send({
                    error: err.message
                });
            }
        
            //success creating stripe customer
            console.log("success creating stripe customer");
            return User.findOneAndUpdate({
                _id: user._id
            }, {
                    $set: {
                        cus_id: customer.id
                    }
                })
                .then((updateduser) => {
                    //charging customer after creation
                    console.log();
                 
                      console.log("charging customer");
                    return stripe.charges.create({ // check kro
                        amount: amountpayable,
                        currency: 'usd',
                        description: 'Sample transaction',
                        //source: req.body.tok,
                        source: user.source.id,
                        customer: customer.id
                    }, (err, charge) => {
                        if (err){
                            //if error charging customer
                             console.log("error charging customer");
                            console.log(err);
                         return res.status(500).send({
                    error: err.message
                });
                     }
                        else {
                             //success charging customer,creating new payment");
                             console.log("success charging customer,creating new payment");
                            var payment = new Payment();
                            payment.card = req.body.source;
                               payment.customer = user.cus_id;
                                payment.coupon = user.coupon;
                              payment.discount = user.discount;
                            payment.amount = parseInt(req.body.amount, 10);
                            payment.save(err => {
                                if (err) {
                                    //error creating new payment");
                                console.log("error creating new payment");
                                    return res.sendStatus(400);
                                } else {
                                    //success creating new payment");
                             console.log("success creating new payment");
                                    return res.status(200).send({
                                        success: true
                                    });
                                }
                            });
                        }
                    });
                }).catch((err) => {
console.log(err);
  return res.status(500).send({
                    error: err.message
                });
});
        });
    }
}
});

paymentApp.put('/:id', (req, res) => {
    Payment.findOneAndUpdate({
        _id: req.params.id
    }, req.body)
        .then(() => {
            return Payment.findOne({
                _id: req.params.id
            }).then((payment) => {
                return res.status(200).send(payment);
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
// paymentApp.put('/updatecard/:id', (req, res) => {

//     User.findOneAndUpdate({
//                 _id: req.params.id
//             },req.body).then(() => {

//              return User.findOne({
//                 _id: req.params.id
//             }).then((user) => {
//                 console.log(user);

//                 stripe.customers.createSource(user.cus_id, {
//                       source: user.source.id,
//                     }).then(()=>{
//                         stripe.customers.update(user.cus_id, {
//                               default_source: user.source.id
//                             }).then(()=>{
//                               return res.status(200).send(user);

//                             }).catch((e) => {
//                                 console.log(e);
//                                 return res.status(500).send({
//                                     error: {
//                                         error: e.message
//                                     }
//                                 });
//                             })

//                         //return res.status(200).send(user);

//                     }).catch((e) => {
//                 console.log(e);
//                 return res.status(500).send({
//                     error: {
//                         error: e.message
//                     }
//                 });
//             })

                
//             }).catch((e) => {
//                 console.log(e);
//                 return res.status(500).send({
//                     error: {
//                         error: e.message
//                     }
//                 });
//             })



//                 }).catch((e) => {
//             res.status(500).send({
//                 error: {
//                     error: e.message
//                 }
//             });
//         })



// });

paymentApp.delete('/:id', (req, res) => {
    Payment.findOneAndDelete({
        _id: req.params.id
    })
        .then((payment) => {
            return res.status(200).send(payment);
        }).catch((e) => {
            res.status(500).send({
                error: e.message
            });
        })
});



// paymentApp.delete('/', (req, res) => {
//    Payment.find({})
//             .then((users) => {

//                 console.log(users);
//                 for (var i = 0; i < users.length; i++) {
//    var usert= users[i]
//    console.log(usert.amount);

               
//                 Payment.findOneAndDelete({
//             _id: usert._id
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
    paymentApp
};