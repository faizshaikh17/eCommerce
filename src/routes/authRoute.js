const express = require('express');
const authRoute = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

const { isUserValidated } = require('../utils/validations')
const { isLoginUserValidated } = require('../utils/validations')

authRoute.post("/signup", async (req, res) => {
    try {
        isUserValidated(req);
        const { name, emailId, password, image, contact, orders } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            emailId,
            password: hashPassword,
            image,
            contact,
            orders
        });

        await user.save();
        res.json({
            user,
            message: `${user.name} added succesfully`
        })

    } catch (error) {
        res.status(400).send(error.message);
    }
});

authRoute.post("/login", async (req, res) => {
    try {
        isLoginUserValidated(req);
        const { emailId, password } = req.body;
        const user = await User.findOne({ emailId });
        if (!user) {
            throw new Error("Ivalid Credentials")
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid Credentials");
        }

        const token = await jwt.sign({ _id: user._id }, "eCommerce");
        console.log(token)

        res.cookie("token", token)
        res.json({
            message: "Login Succesful"
        })
    } catch (err) {
        res.status(400).send(err.message);
    }
})

module.exports = authRoute;