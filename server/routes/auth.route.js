var auth = require('../controllers/auth.controller');
const express = require('express');
const router = express.Router();

router.post('/register_user', auth.RegisterUser);
router.post('/login_user', auth.LoginUser);
router.post('/log_out_user', auth.logOutUser);
module.exports = router;