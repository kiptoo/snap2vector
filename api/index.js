const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const multer=require('multer');
const path=require('path');
const fileUpload = require('express-fileupload');
var admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<snaptovector>.firebaseio.com'
  });

const UPLOAD_PATH='static/images/user-uploads';
mongoose.connect('mongodb+srv://root:root@cluster0-pdymd.gcp.mongodb.net/snaptovector');
//mongoose.connect('mongodb://localhost/vectorizedImageDB');
mongoose.Promise=global.Promise;

app.use(fileUpload({
	limits: { fileSize: 50 * 1024 * 1024 }
}));

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, UPLOAD_PATH);
	},
	filename: function(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
	}
})
const upload = multer({storage: storage,
	limits:{
		fileSize:20000 //size of u file
		}
});

module.exports = upload;

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	   next();
 });

app.use(express.static('static'))
app.use(bodyParser.json());	
app.use(cors());

app.use(function(req,res,next){
	//console.log(req.headers.authorization);
	if(req.headers.authorization == null || req.headers.authorization == undefined){
		return res.status(401).send({"error":"unauthorized"});
	}
	//check authorization here if authorized forward request to next middleware else return unauthorize.
	admin.auth().verifyIdToken(req.headers.authorization).then(function(decodedToken) {
        var uid = decodedToken.uid;
		// ...
		next();
    }).catch(function(){
		return res.status(401).send({"error":"unauthorized"});
	});
});

app.use('/api',require('./routes/api'));
 
//error handler middleware.
app.use(function(err,req,res,next){
    res.status(422).send({error:{ error: err.message }});
});

app.listen(8080, function(){
    console.log('listening for requests.');
})

 