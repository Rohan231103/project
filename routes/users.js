var express = require('express');
var router = express.Router();
var demo = require('../controller/findcontroller');

router.get('/find',demo.users)

module.exports = router;
