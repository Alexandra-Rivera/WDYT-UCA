var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require("./config/mongoose"); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const apiRouter = require("./routes/api/index.router");

var app = express();

mongoose.connect(); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
 
app.use("/api", apiRouter); 

module.exports = app;
