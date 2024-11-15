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

module.exports = isAdminValidated;