const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    picture: {
        type: String,
    },
    cart: {
        type: Array,
    },
    contact: {
        type: String,
    },
    orders: {
        type: Array,
    },
    isAdmin: {
        type: Boolean,
    }
},
    {
        timestamps: true
    }
)

const User = new mongoose.model("user", userSchema);
module.exports = User;