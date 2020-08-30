const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    _id: String,
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    source: {
        type: Schema.Types.Mixed,
        default: null
    },
    phone: {
        type: String,
        default: null
    },
     type: {
        type: String,
        default: null
    },
    company: {
        type: String,
        default: null
    },
    card: {
        type: Schema.Types.Mixed,
        default: null
    },
    cus_id: {
        type: String,
        default: null
    },
    token: {
        type: String
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;