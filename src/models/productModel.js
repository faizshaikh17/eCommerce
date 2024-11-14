const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    backgroundColour: {
        type: String,
        required: true
    },
    panelColour: {
        type: String,
        required: true
    },
    textColour: {
        type: String,
        required: true
    },
    discount: {
        type: String
    },
    price: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

const Product = new mongoose.model("product", productSchema);
module.exports = Product;