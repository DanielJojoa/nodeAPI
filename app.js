var express = require('express');
var app = express();
var db = require('./db');
var morgan = require('morgan');


var UserController = require('./user/UserController');
app.use('/users', UserController);
app.use(morgan('dev'));

var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);
module.exports = app;

module.exports = app;