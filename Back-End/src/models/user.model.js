const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    about: String,
    profile_image: String,
    send_otp: String,
    otp_expire: {
        type: Date,
        default: null
    },
    attempt: {
        type: Number,
        default: 0,
    },
    expire_attempt: {
        type: Date,
        default: null
    },
    verify_attempt: {
        type: Number,
        default: 0,
    },
    attempt_verify_expire: {
        type: Date,
        default: null
    },
    create_at: String,
    update_at: String,
    isActive: {
        type: Boolean,
        default: true,
    },
    isDelete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Users', userSchema, 'Users');