const mongoose = require('mongoose');

const scvsSchema = new mongoose.Schema({
    fame: {
        type: String,
        required: [true, "First Name is required"],
    },
    lname: {
        type: String,
        required: [true, "Last name is required"],
    },
    phone: { 
        type: Number,
        required: [true, "Phone number is required"],
    },
    space: {
        type: Number,
        required: [true, "Space number is required"]
    },
    addy: {
        type: String,
        required: [true, "Address is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    }
}, { timestamps: true });

module.exports.scv = mongoose.model('scv', scvsSchema);