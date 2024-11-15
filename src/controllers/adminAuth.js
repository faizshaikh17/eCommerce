const bcrypt = require('bcrypt');

const Admin = require('../models/adminModel');
const isAdminValidated = require('../utils/validations');

const adminAuth = async (req, res) => {
    try {
        isAdminValidated(req);

        const { name, emailId, password } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);

        const admin = new Admin({
            name,
            emailId,
            password: hashPassword,
        });

        if (Admin.length > 0) {
            throw new Error("Only one Admin allowed")
        }

        await admin.save();
        res.send(admin.name + " is added as admin")
    } catch (err) {
        res.status(400).json(err.message)
    }
}

module.exports = adminAuth;