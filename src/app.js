const express = require('express');
const { dbConnection } = require('./config/database');
const User = require('./models/userModel');
const Product = require('./models/productModel');
const Admin = require('./models/adminModel');


dbConnection();