const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const createError = require('http-errors');
const multer = require('multer');
const crypto = require('crypto');
const logger = require('morgan');
const stylus = require('stylus');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const indexRouter = require('./router/index');
const boardRouter = require('./router/board');

const app = express();
const port = process.env.PORT || 8123;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/board', boardRouter);

app.listen(port, '0.0.0.0', function(){

    console.log('STORE for MCPE fileserver is running on ' + port)
    
});

module.exports = app;
