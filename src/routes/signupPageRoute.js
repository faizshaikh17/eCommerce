const express = require('express');
const userAuth = require('../middlewares/userAuth');
const Products = require('../models/productModel')

const signupRoute = express.Router();

signupRoute.get("/", async (req, res) => {
    try {
        res.render("pages/index")
    } catch (err) {
        res.status(400).json(err.message).redirect('/');
    }
});

signupRoute.get("/shop", userAuth, async (req, res) => {
    try {
        const product = await Products.find();
        res.render("pages/shop", { product })
    } catch (err) {
        res.status(400).json(err.message).redirect('/');

    }
})

module.exports = signupRoute;