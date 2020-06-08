const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const router = express.Router();

module.exports = router;
