const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


const User = require('./models/userModel');
const Product = require('./models/productModel');
const signupRoute = require('./routes/signupPageRoute');
const userRouter = require('./routes/userRoute');
const adminRouter = require('./routes/adminRoute')
const productRouter = require('./routes/productRoute')


const { dbConnection } = require('./config/database');
dbConnection()
    .then((res) => {
        console.log("db running");
        app.listen(port);
    })
    .catch((err) => console.log("db notrunning"));


const dbgr = require('debug')("development: mongoose");


app.use("/", signupRoute);
app.use("/user", userRouter);
app.use('/admin', adminRouter);
app.use('/product', productRouter);
