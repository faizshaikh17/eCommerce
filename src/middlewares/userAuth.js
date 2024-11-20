const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        const decodedUser = await jwt.verify(token, "eCommerce");
        const { _id } = decodedUser;
        const user = await User.findById({ _id: _id });
        if (!user) {
            throw new Error("User not found");
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(400).send(error.message)
    }
};

module.exports = userAuth;