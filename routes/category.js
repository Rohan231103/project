var express = require('express');
var router = express.Router();
var category = require('../controller/categorycontroller');

router.post('/cat',category.cat_insert);
router.post('/subcat',category.sub_cat_insert);
router.get('/',category.get_cat);
router.get('/sub',category.get_subcat);

module.exports = router;