const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: String
    },
    // user:{
    //     type:Schema.Types.ObjectId,
    //     ref:'user'
    // },
    images: [{
        type: Schema.Types.ObjectId,
        ref: 'image'
    }],
    package: {
        type: Object
    },
    delivered: {
        type: Boolean,
        default: false
    },
    delivered_date: {
        type: Date,
        default: null
    },
    accepted: {
        type: Boolean,
        default: false
    },
    feedback: {
        message: {
            type: String
        },
        rating: {
            type: Number
        }
    },
    revisionRequested: {
        type: Boolean,
        default: false
    },
    isViewedByUser: {
        type: Boolean,
        default: false
    },
    requireSpecialAction: {
        type: Boolean,
        default: false
    }
}, {
    toJSON: {
        virtuals: true
    }
});

OrderSchema.virtual('user_data', {
    ref: 'user', // The model to use
    localField: 'user', // Find user where `localField`
    foreignField: '_id', // is equal to `foreignField`
    justOne: true
});

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;