const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gstIn: {
        type: String,
    },
    image: {
        type: String,
    }
},
    {
        timestamps: true
    });

const Admin = new mongoose.model("admin", adminSchema);

module.exports = Admin;