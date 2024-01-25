var express = require('express');
var router = express.Router();
var demo = require('../controller/usercontroller');
var logincontroller = require('../controller/logincontroller')
var auth = require('../middleware/auth');
const { users } = require('../controller/findcontroller');

router.post('/add',demo.index)
router.get('/delete/:id',demo.delete)
router.post('/update/:id',demo.update)
router.get('/check',demo.check)
router.get('/checkbyname/:id',demo.checkbyname)
router.post('/login',logincontroller.login);
router.get('/logout',logincontroller.logout)
// router.get('/getuser',auth.check_token)
router.get('/getuser',users)

router.get('/',auth.check_token,users);
module.exports = router;