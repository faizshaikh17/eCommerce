const validator = require('validator');

const isAdminValidated = (req) => {
    const { name, emailId, password } = req.body;

    if (!name || !emailId || !password) {
        throw new Error("Enter all the fields");
    }
    else if (!validator.isEmail(emailId)) {
        throw new Error("EmailId not valid");
    }
    else if (!validator.isStrongPassword(password)) {
        throw new Error("Enter strong password")
    }
}

const isUserValidated = (req) => {

    const { name, emailId, password } = req.body;

    if (!name || !emailId || !password) {
        throw new Error("Enter necessary details")
    }
    else if (!validator.isEmail(emailId)) {
        throw new Error("Enter valid email");
    }
    else if (!validator.isStrongPassword(password)) {
        throw new Error("Enter valid password");
    }
};

const isLoginUserValidated = (req) => {

    const { emailId, password } = req.body;

    if (!emailId || !password) {
        throw new Error("Enter necessary details")
    }
    else if (!validator.isEmail(emailId)) {
        throw new Error("Enter valid email");
    }
    else if (!validator.isStrongPassword(password)) {
        throw new Error("Enter valid password");
    }
}


module.exports = { isUserValidated, isAdminValidated, isLoginUserValidated };