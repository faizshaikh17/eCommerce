const express = require('express');
const adminRouter = express.Router();
const adminAuth = require('../controllers/adminAuth')

adminRouter.post("/admin", adminAuth);

module.exports = adminRouter;