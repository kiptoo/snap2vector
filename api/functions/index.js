/* eslint-disable promise/no-nesting */
const functions = require('firebase-functions');
var admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<snaptovector>.firebaseio.com'
});

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root@cluster0-pdymd.gcp.mongodb.net/snaptovector', { useNewUrlParser: true });
mongoose.Promise = global.Promise;


const {
    orderApp
} = require('./routes/order');
const {
    userApp
} = require('./routes/user');
const {
    designerApp
} = require('./routes/designer');
const {
    imagesApp
} = require('./routes/images');
const {
    notificationsApp
} = require('./routes/notifications');
const {
    paymentApp
} = require('./routes/payment');
const {
    packageApp
} = require('./routes/package');
const {
    priceApp
} = require('./routes/price');
const {
  couponApp
} = require('./routes/coupon');
const {
  inboxApp
} = require('./routes/inbox');
const {
    revisionApp
} = require('./routes/revision');
const {
    vectorApp
} = require('./routes/vector');
const {
    storeTokenApp
} = require('./routes/storeToken');



// User services
exports.users = functions.https.onRequest(userApp);

// Designer services
exports.designers = functions.https.onRequest(designerApp);

// Image  services
exports.image = functions.https.onRequest(imagesApp);

// Notification  services
exports.notifications = functions.https.onRequest(notificationsApp);

// Order  services
exports.orders = functions.https.onRequest(orderApp);


// Payment  services
exports.payments = functions.https.onRequest(paymentApp);
// Package  services
exports.packages = functions.https.onRequest(packageApp);

// Prices  services
exports.prices = functions.https.onRequest(priceApp);

// coupon  services
exports.coupons = functions.https.onRequest(couponApp);
// inbox  services
exports.inbox = functions.https.onRequest(inboxApp);

// Revision services
exports.revision = functions.https.onRequest(revisionApp);

// Vector services
exports.vectors = functions.https.onRequest(vectorApp);

// Store token services
exports.store_token = functions.https.onRequest(storeTokenApp);