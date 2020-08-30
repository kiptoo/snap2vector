const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PaymentSchema = new Schema({
    card: {
        type: Schema.Types.Mixed
    },
    amount: {
        type: Number
    },
    discount: {
        type: Number
    },
     customer: {
        type: String
    },
     coupon: {
        type: String
    }
});

const Payment = mongoose.model('payment', PaymentSchema);

module.exports = Payment;