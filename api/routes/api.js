var Request = require("request");
const express=require('express');
const router=express.Router();
const path=require('path'); // for handling local file system
const fs=require('fs'); // file system
const del=require('del'); // for delete
const emailUtil = require('../email-util');
//const { sendEmail } = emailUtil;
const EmailService=emailUtil;
var stripe=require('stripe')('sk_test_Xm73aTMvwE6DDcXsEVj33DVw');//secret key
//var stripe=require('stripe')('sk_test_VmTBa7TPoajE2WRBruAg9pkS');//secret key

var passwordGenerator = require('generate-password');
const handlebars=require('handlebars');
var FCM = require('fcm-node');
var serverKey = 'AAAA22HnGLY:APA91bEmLwtfZkk4br3c9u3ycLY4nc32a3AcSE0dMe6mxiOtf4lw1aTk_9obQJsSmVFu4uILmbyyBqJlU4krrkALk8R-4k3vJnW-8MT3xtzHdsc8IMNNGXq3YpsRsCTNG-kgmAY3NIYl'; //put your server key here
var fcm = new FCM(serverKey);
const constants=require('../constants');
const mongoose=require('mongoose');

const User=require('../models/user');
const Designer=require('../models/designer');
const Image=require('../models/image');
const Vector=require('../models/vector');
const Payment=require('../models/payment');
const Order=require('../models/order');
const upload = require('../index');

const EZTEXTING_USER="nomana123";
const EZTEXTING_PASSWORD="TRFb8AxnihPvk3f";
const UPLOAD_PATH='static/images/user-uploads'


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//user crud operations.
router.get('/users',function(req,res,next){
    User.find({}).then(function(users){
        res.status(200).send(users);
    });
});
router.post('/users_check',function(req,res,next){
	console.log(req.body);
	User.create(req.body).then(function(user){
		console.log(user);
	}).catch(next);
});
router.post('/users',function(req,res,next){
    User.findOne({email:req.body.email}).then(function(user){
		if(user){
			if(req.body.source=="facebook" || req.body.source=="google"){
				res.status(200).send(user);
			}
			else{
				res.status(204).send(user);
			}
		}
		else{
			//req.body._id=mongoose.Types.ObjectId(req.body._id);
			User.create(req.body).then(function(user){
				
				fs.readFile("./email-templates/new-user.html",{encoding:'utf-8'} ,function (err, html) {
					if (err) {
						throw err;
					}
					else {
						var template =handlebars.compile(html);
						var replacements={
							api_url:constants.API_URL+"/images/logo.png",
							firstname:user.name,                                 
						};
						var htmlToSend=template(replacements);
						EmailService.sendText(user.email,"Snap2Vector Registration","",htmlToSend,"")
						.then((info)=>{
							console.log("email success");
							res.status(200).send(user);
						})
						.catch((err)=>{
							console.log(err);
							return res.status(500).send({ error: err.message });
						})
					}
				});
				
			}).catch(next);
		}
	});
});
router.put('/users/:id',function(req,res,next){
    User.findOneAndUpdate({_id:req.params.id},req.body).then(function(){
		User.findOne({_id:req.params.id}).then(function(user){
			res.status(200).send(user);
		}); 
	});
});
router.delete('/users/:id',function(req,res,next){
    User.findOneAndDelete({_id: req.params.id}).then(function(user){
        res.status(200).send(user);
    });
});
//-------------------------- End user crud operations. --------------------

//designer crud operations.
router.get('/designers',function(req,res,next){
    Designer.find({}).then(function(designers){
        res.status(200).send(designers);
    });
});
router.post('/designers',function(req,res,next){
    Designer.create(req.body).then(function(designer){
        res.status(200).send(designer);
    }).catch(next);
    
});
router.put('/designers/:id',function(req,res,next){
    Designer.findOneAndUpdate({_id:req.params.id},req.body).then(function(){
        Designer.findOne({_id:req.params.id}).then(function(designer){
            res.status(200).send(designer);
        }); 
    });
});
router.delete('/designers/:id',function(req,res,next){
    Designer.findOneAndDelete({_id: req.params.id}).then(function(designer){
        res.status(200).send(designer);
    });
});
//-------------------------- End designer crud operations. --------------------

//image crud operations.
//{email: req.params.email}
router.get('/images/:id?',function(req,res,next){
    var id=req.params.id;
    if(!id){
		Image.find() 
		.populate("user_data","name email source")
		.then(function(images){
			res.status(200).send(images);
		});
	}
	else{
		Image.find({user:id})
		.populate("user_data","name email source")
		.then(function(images){
			res.status(200).send(images);
		});
	}
});

router.post('/images', function(req,res,next){
	if (!req.files){
		console.log("no image");
		return res.status(400).send('No files were uploaded.');
	}
	var userId=req.body.userId;
	var image_name=req.body.image_name;
	// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
	let sampleFile = req.files.image;
	// Use the mv() method to place the file somewhere on your server
	//let path = req.protocol + '://' + req.get('host') + '/images/user-uploads/' + sampleFile. filename;
	var fileName = Date.now() + "-" + image_name;
	let path = 'static/images/user-uploads/' +  fileName;
	sampleFile.mv(path, function(err) {
		if (err)
		return res.status(500).send(err);
		var image = new Image();
		image.filename = fileName;
		image.originalname = image_name;
		image.created = Date.now();
		image.url  = req.protocol + '://' + req.get('host') + '/images/user-uploads/' + image.filename;
		image.user=userId;
		image.save(function (err, img) {
			if(err) {
				return res.sendStatus(400);
			}
			return res.status(200).send(img);
		});
	});
});

router.put('/images/:id',function(req,res,next){
    Image.findOneAndUpdate({_id:req.params.id}, req.body).then(function(){
		res.sendStatus(200);
	}).catch(next);
});
router.delete('/images/:id',function(req,res,next){
    Image.findOneAndDelete({_id: req.params.id}).then(function(image){
		del([path.join(UPLOAD_PATH,image.filename)]).then(deleted=>{
			res.sendStatus(200);
		});
	});
});
//-------------------------- End image crud operations. --------------------

//vector crud operations.
router.get('/vectors/:id?',function(req,res,next){
    var id=req.params.id;
    if(!id){
        Vector.find({})
        .populate({
            path:"order",
            model:"order"
        })
        .populate({
            path:"designer",
            select:"name email source",
            model:"designer"
        })
        .then(function(vectors){
            res.status(200).send(vectors);
        });
    }
    else{
        Vector.find({order:id})
        .populate({
            path:"order",
            model:"order"
        })
        .populate({
            path:"designer",
            select:"name email source",
            model:"designer"
        })
        .then(function(vectors){
            res.status(200).send(vectors);
        });
    }
});
router.post('/vectors',function(req,res,next){
    if (!req.files){
        console.log("no image");
        return res.status(400).send('No files were uploaded.');
    }
    let files = req.files.images;
    var orderId=req.body.orderId;
    Order.findOne({_id:orderId}).then(function(order){
        if(order){
			order.delivered=true;
			order.delivered_date=Date.now();
            Order.findByIdAndUpdate({_id:order._id},order).then(function(o){

                if(Array.isArray(files)){
                    files.forEach(file => {
                        var fileName = Date.now() + "-" + file.name;
                        let path = 'static/images/designer-uploads/' +  fileName;
                        file.mv(path, function(err) {
                            if (err){
                                console.log("error in file.mv : " + err);
                                return res.status(500).send(err);
                            }
                            var vector = new Vector();
                            vector.filename = fileName;
                            vector.originalname = file.name;
                            vector.created = Date.now();
                            vector.url  = req.protocol + '://' + req.get('host') + '/images/designer-uploads/' + vector.filename;
                            vector.order = orderId;
                            //vector.designer=mongoose.Types.ObjectId(designerId);
                            
                            vector.save(err => {
                                if(err) {
                                    console.log("error in vector.save : " + err);
                                    return res.sendStatus(400);
                                }
                            });
                        });
					});
					User.findOne({_id:order.user}).then(function(user){
						if(user){
							var message;
							if(order.package.type==="Snap to Vector"){
								message = { 
									to: user.token,
									notification: {
										title: 'Order delivered',
										body: 'Your Snap2vector order is delivered',
										icon: "notification_icon"
									},
								};
							}else{
								message = { 
									to: user.token,
									notification: {
										title: 'Order delivered',
										body: 'Your Snap2digitize is delivered',
										icon: "notification_icon"
									},
								};
							}
							
							fcm.send(message, function (err, response) {
								if (err) {
									console.log("Something has gone wrong!");
									res.status(500).send({ error: err.message });
								} else {
									fs.readFile("./email-templates/notification.html",{encoding:'utf-8'} ,function (err, html) {
										if (err) {
											throw err;
										}
										else {
											var template =handlebars.compile(html);
											var replacements={
												api_url:constants.API_URL+"/images/logo.png",
												title:'Order delivered',
												description:message.notification.body                                   
											};
											var htmlToSend=template(replacements);
											EmailService.sendText(user.email,'Order delivered',"",htmlToSend,"")
											.then((info)=>{
												console.log("email success");
												return res.status(200).send("files uploaded");
											})
											.catch((err)=>{
												console.log(err);
												return res.status(500).send({ error: err.message });
											})
										}
									});
								}
							});
						}
					});
                    
                }
                else{
                    var fileName = Date.now() + "-" + files.name;
                    let path = 'static/images/designer-uploads/' +  fileName;
                    files.mv(path, function(err) {
                        if (err){
                            console.log("error in file.mv : " + err);
                            return res.status(500).send(err);
                        }
                        var vector = new Vector();
                        vector.filename = fileName;
                        vector.originalname = files.name;
                        vector.created = Date.now();
                        vector.url  = req.protocol + '://' + req.get('host') + '/images/designer-uploads/' + vector.filename;
                        vector.order = orderId;
                        //vector.designer=mongoose.Types.ObjectId(designerId);
                        
                        vector.save(err => {
                            if(err) {
                                console.log("error in vector.save : " + err);
                                return res.sendStatus(400);
                            }
                        });
                    });
                    User.findOne({_id:order.user}).then(function(user){
						if(user){
							var message;
							if(order.package.type==="Snap to Vector"){
								message = { 
									to: user.token,
									notification: {
										title: 'Order delivered',
										body: 'Your Snap2vector order is delivered',
										icon: "notification_icon"
									},
								};
							}else{
								message = { 
									to: user.token,
									notification: {
										title: 'Order delivered',
										body: 'Your Snap2digitize is delivered',
										icon: "notification_icon"
									},
								};
							}
							
							fcm.send(message, function (err, response) {
								if (err) {
									console.log("Something has gone wrong!");
									res.status(500).send({ error: err.message });
								} else {
									fs.readFile("./email-templates/notification.html",{encoding:'utf-8'} ,function (err, html) {
										if (err) {
											throw err;
										}
										else {
											var template =handlebars.compile(html);
											var replacements={
												api_url:constants.API_URL+"/images/logo.png",
												title:'Order delivered',
												description:message.notification.body                                   
											};
											var htmlToSend=template(replacements);
											EmailService.sendText(user.email,'Order delivered',"",htmlToSend,"")
											.then((info)=>{
												console.log("email success");
												return res.status(200).send("files uploaded");
											})
											.catch((err)=>{
												console.log(err);
												return res.status(500).send({ error: err.message });
											})
										}
									});
								}
							});
						}
					});
                }
            });
        }
        else
            console.log("order not found");
    });
    
});
router.put('/vectors/:id',function(req,res,next){
    Vector.findOneAndUpdate({_id:req.params.id},req.body).then(function(){
        Vector.findOne({_id:req.params.id}).then(function(vector){
            res.status(200).send(vector);
        }); 
    });
});
router.delete('/vectors/:id',function(req,res,next){
    Vector.findOneAndDelete({_id: req.params.id}).then(function(vector){
        res.status(200).send(vector);
    });
});
//-------------------------- End vector crud operations. --------------------

//payment crud operations.
router.get('/payments',function(req,res,next){
	Payment.find({}).then(function(payments){
		res.status(200).send(payments);
	});
});
router.post('/payments',function(req,res,next){
	console.log("in payments post");
	var body = req.body;
	var stripetoken = body.stripeToken;
	var amountpayable = body.amount;
	amountpayable= amountpayable * 100;
	var card=body.card;

	//let me check on google
	var charge = stripe.charges.create({ // check kro
		amount: amountpayable,
		currency: 'usd',
		description: 'Sample transaction',
		source: stripetoken.id
	}, function (err, charge) {
		if (err)
			console.log(err);
		else{
			console.log("charge success");
			console.log(charge);
			var payment=new Payment();
			payment.card=card;
			payment.amount=req.body.amount;
			payment.save(err => {
				if(err) {
					return res.sendStatus(400);
				}
				else{
					return res.status(200).send({ success: true });
				}
			});
		}
	});
});
router.put('/payments/:id',function(req,res,next){
    Payment.findOneAndUpdate({_id:req.params.id},req.body).then(function(){
		Payment.findOne({_id:req.params.id}).then(function(payment){
			res.status(200).send(payment);
		}); 
	});
});
router.delete('/payments/:id',function(req,res,next){
    Payment.findOneAndDelete({_id: req.params.id}).then(function(payment){
		res.status(200).send(payment);
	});
});
//-------------------------- End payment crud operations. --------------------

//order crud operations.
router.get('/orders/:id?',function(req,res,next){
	var id=req.params.id;
	// console.log('in order get');
	if(!id){
		Order.find({})
		.populate({
			path:"images",
			select:"filename originalname url created",
			model:"image"
		})
		.populate("user_data","name email source").exec(function(err,orders){
			for (let o of orders) {
				console.log('in orders for loop');
				if(o.delivered && !o.accepted){
					let d=Date.now()-o.delivered_date;
					let days=Math.ceil(d / (1000 * 3600 * 24));
					console.log(days);
					if(days>=4){
						o.accepted=true;
						o.isViewedByUser=false;
						Order.findOneAndUpdate({_id:o._id},o).then(function(){
						});
					}
				}
			}
			res.status(200).send(orders);
		});
	}
	else{
		Order.find({user:id})
		.populate({
			path:"images",
			select:"filename originalname url created",
			model:"image"
		})
		.populate("user_data","name email source").exec(function(err,orders){
			for (let o of orders) {
				console.log('in orders for loop');
				if(o.delivered && !o.accepted){
					let d=Date.now()-o.delivered_date;
					let days=Math.ceil(d / (1000 * 3600 * 24));
					console.log(days);
					if(days>=4){
						o.accepted=true;
						o.isViewedByUser=false;
						Order.findOneAndUpdate({_id:o._id},o).then(function(){
						});
					}
				}
			}
			res.status(200).send(orders);
		});
	}
    
});
router.post('/orders',function(req,res,next){
    Order.create(req.body).then(function(order){
		User.findOne({_id:order.user}).then(function(user){
			var emailTemplate;
			if(order.package.type==="Snap to Vector"){
				emailTemplate="./email-templates/vector-order-placed.html";
			}else{
				emailTemplate="./email-templates/digitize-order-placed.html";
			}
		   fs.readFile(emailTemplate,{encoding:'utf-8'} ,function (err, html) {
			   if (err) {
				   throw err;
			   }
			   else {
				   var template =handlebars.compile(html);
				   var replacements;
				   if(order.package.type==="Snap to Vector"){
					   replacements={
						   type:order.package.type,
						   artwork:order.package.artwork,
						   scheme:order.package.scheme,
						   file:order.package.fileFormat,
						   instructions:order.package.instructions,
						   price:order.package.amount,
						   api_url:constants.API_URL+"/images/logo.png"
					   };
				   }else{
					   replacements={
						   type:order.package.type,
						   po:order.package.poNumber,
						   size:order.package.size,
						   sizeValue:order.package.sizeValue,
						   price:order.package.amount,
						   file:order.package.fileFormat,
						   instructions:order.package.instructions,
						   garment:Array.prototype.map.call(order.package.garmentTypes, function(item) { return item.name; }).join(" , "),
						   trims:Array.prototype.map.call(order.package.trims, function(item) { return item.name; }).join(" , "),
						   api_url:constants.API_URL+"/images/logo.png"
					   };
				   }
				   var htmlToSend=template(replacements);
				   EmailService.sendText(user.email,"Your order has been placed","",htmlToSend,"")
				   .then((info)=>{
					   if(order.package.type==="Snap to Vector"){
						   emailTemplate="./email-templates/vector-order-received.html";
					   }else{
						   emailTemplate="./email-templates/digitize-order-received.html";
					   }
					   Designer.find({}).then(function(designers){
						   let count=0;
						   designers.forEach(designer => {

							   fs.readFile(emailTemplate,{encoding:'utf-8'} ,function (err, html) {
								   if (err) {
									   throw err;
								   }
								   else {
									   var template =handlebars.compile(html);
									   var replacements;
									   if(order.package.type==="Snap to Vector"){
										   replacements={
											   type:order.package.type,
											   artwork:order.package.artwork,
											   scheme:order.package.scheme,
											   file:order.package.fileFormat,
											   instructions:order.package.instructions,
											   price:order.package.amount,
											   api_url:constants.API_URL+"/images/logo.png"
										   };
									   }else{
										   replacements={
											   type:order.package.type,
											   po:order.package.poNumber,
											   size:order.package.size,
											   sizeValue:order.package.sizeValue,
											   price:order.package.amount,
											   file:order.package.fileFormat,
											   instructions:order.package.instructions,
											   garment:Array.prototype.map.call(order.package.garmentTypes, function(item) { return item.name; }).join(" , "),
											   trims:Array.prototype.map.call(order.package.trims, function(item) { return item.name; }).join(" , "),
											   api_url:constants.API_URL+"/images/logo.png"
										   };
									   }
									   var htmlToSend=template(replacements);
   
									   EmailService.sendText(designer.email,"You have received new order","",htmlToSend,"")
									   .then((info)=>{
										   count++;
										   if(count == designers.length) {
											   return res.sendStatus(200);
										   }
									   })
									   .catch((err)=>{
										   console.log(err);
										   return res.status(500).send({ error: err.message });
									   })
								   }
							   });
						   });

					   });

				   })
				   .catch((err)=>{
					   console.log(err);
					   return res.status(500).send({ error: err.message });
				   })
			   }
		   });
	   }); 
	   return res.sendStatus(200);
   }).catch(next);
});
router.put('/orders/:id',function(req,res,next){
	Order.findOne({_id:req.params.id}).then(function(order){
		var v=order.__v+1;
		var o=req.body;
		o.__v=v;
		Order.findOneAndUpdate({_id:req.params.id},o).then(function(){
			Order.findOne({_id:req.params.id}).then(function(order1){
				res.status(200).send(order1);
			}); 
		});
	});
});
router.delete('/orders/:id',function(req,res,next){
    Order.findOneAndDelete({_id: req.params.id}).then(function(order){
		res.status(200).send(order);
	});
});
//-------------------------- End payment crud operations. --------------------

//save token
router.post('/store-token',function(req,res,next){
    User.findOne({_id:req.body.userId}).then(function(user){
		if(user){
			user.token=req.body.token;
			User.update({_id: req.body.userId}, user, function(err, raw) {
				if (err) {
				  res.status(500).send(err);
				}
				res.status(200).send(raw);
			});
		}
		else{
			res.status(404).send();
		}
	});
});

//notification
router.post('/notification',function(req,res,next){
    console.log("in notification : "+req.body.orderId);
    var title='Order update';
    var orderId =req.body.orderId ;
    var description=req.body.description;

    Order.findOne({_id:orderId}).then(function(order){
		console.log(order);
        if(order){
            User.findOne({_id:order.user}).then(function(user){
                if(user){
                    var message = { 
                        to: user.token,
                        notification: {
                            title: 'Order update',
							body: description,
							icon: "notification_icon"
                        },
                    };

                    var url = "https://app.eztexting.com/api/sending/?user=" + EZTEXTING_USER + "&pass=" + EZTEXTING_PASSWORD + "&phonenumber=" + user.phone + "&subject=" + message.notification.title + "&message=" + message.notification.description + "&express=1&_ga=2.5641139.1270962510.1540106937-554730907.1540106937"
                    Request.get(url)
                    .on('response', function(response) {
                        console.log(response.statusCode); 
                    });
                    fcm.send(message, function (err, response) {
                        if (err) {
                            console.log("Something has gone wrong!");
                            res.status(500).send({ error: err.message });
                        } else {
                            fs.readFile("./email-templates/notification.html",{encoding:'utf-8'} ,function (err, html) {
                                if (err) {
									console.log(err);
                                    throw err;
                                }
                                else {
                                    var template =handlebars.compile(html);
                                    var replacements={
                                        api_url:constants.API_URL+"/images/logo.png",
                                        title:title,
                                        description:description                                   
                                    };
                                    var htmlToSend=template(replacements);
                                    EmailService.sendText(user.email,title,"",htmlToSend,"")
                                    .then((info)=>{
                                        console.log("email success");
                                        return res.sendStatus(200);
                                    })
                                    .catch((err)=>{
                                        console.log(err);
                                        return res.status(500).send({ error: err.message });
                                    })
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});


//forget password
router.post('/forget-password',function(req,res,next){
    User.findOne({email:req.body.email}).then(function(user){
        if(user){
            var password = passwordGenerator.generate({
                length: 6, 
                 numbers: true
            });
            fs.readFile("./email-templates/forget_password.html",{encoding:'utf-8'} ,function (err, html) {
                if (err) {
                    throw err;
                }
                else {
                    var template =handlebars.compile(html);
                    var replacements={
                        name:capitalizeFirstLetter(user.name),
                        password:password,
                        api_url:constants.API_URL+"/images/logo.png"
                    };
                    var htmlToSend=template(replacements);
                    EmailService.sendText(user.email,"Your SnapToVector Account Password Has Been Reset","",htmlToSend,"")
                    .then((info)=>{
                        user.password=password;
                        User.update({email: user.email}, user, function(err, raw) {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            return res.sendStatus(200);
                        });
                    })
                    .catch((err)=>{
                        console.log(err);
                        return res.status(500).send({ error: err.message });
                    })

                }
            });
        }
        else{
            return res.sendStatus(404);
        } 
    });
});

//email send test
router.post('/mail', async (req, res, next) => {

    /* {
        "recipient":"bcsf14m066@pucit.edu.pk",
        "message":{
            "subject":"test subject",
            "text":"test message",
            "html":""
        }
    } */

    /* sendText(to, subject, text,html) */
    var message=req.body.message;
    EmailService.sendText(req.body.recipient,message.subject , message.text,message.html,"")
    .then((info) => {
      // Email sent successfully
      return res.status(200).json({message: 'Your query has been sent'}).send();
    })
    .catch((err) => {
      // Error sending email
      return res.status(500).send({error:{ error: err.message }});

    })
});


//Revision Request
router.post('/revision',function(req,res,next){
    var orderObj=JSON.parse(req.body.order);
	let instruction=orderObj.instructions;
	let imageFile = req.files.image;
	var fileName = Date.now() + "-" + imageFile.name;
	let path = 'static/images/user-uploads/' +  fileName;
	imageFile.mv(path, function(err) {
		if (err){
			console.log(err);
			return res.status(500).send(err);
		}
		let imageUrl  = req.protocol + '://' + req.get('host') + '/images/user-uploads/' + fileName;

		Order.findOne({_id:orderObj._id}).then(function(order){
			order.revisionRequested=true;
			order.delivered=false;
			Order.findOneAndUpdate({_id:orderObj._id},order).then(function(){
				fs.readFile("./email-templates/order-revision-requested.html",{encoding:'utf-8'} ,function (err, html) {
					if (err) {
						console.log(err);
						throw err;
					}
					else {
						fs.readFile(path,function(err,data){
							if(err)
							{
								console.log(err);
								throw err;
							}
							else{
								let base64Image = new Buffer(data, 'binary').toString('base64');

								var template =handlebars.compile(html);
								var replacements={
									api_url:constants.API_URL+"/images/logo.png",
									instructions:instruction,
									date:order.date                   
								};
								var htmlToSend=template(replacements);
				
								Designer.find({}).then(function(designers){
									let count=0;
									designers.forEach(designer => {
										EmailService.sendText(designer.email,"Revision Requested","",htmlToSend,{filename: fileName,content: base64Image,encoding: 'base64'})
										.then((info)=>{
											count++;
											if(count == designers.length) {
												return res.status(200).send(order);
											}
										})
										.catch((err)=>{
											console.log(err);
											return res.status(500).send({ error: err.message });
										})
									});
								});

							}
						});
					}
				});
			})
		});
	});
 
});

module.exports=router;