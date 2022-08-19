var express = require('express');
var router = express.Router();

const {home,about} = require('../controllers/mainController');

router
    .get('/',home)
    .get('/about',about)

module.exports = router

