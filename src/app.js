const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

const User = require('./models/userModel');
const Product = require('./models/productModel');
const adminAuth = require('./controllers/adminAuth')


const { dbConnection } = require('./config/database');
dbConnection()
    .then((res) => {
        console.log("db running");
        app.listen(port);
    })
    .catch((err) => console.log(err.message));


const dbgr = require('debug')("development: mongoose");

app.post("/admin", adminAuth);

