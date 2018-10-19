var auth = require('../controllers/auth.controller');
const express = require('express');
const router = express.Router();

router.post('/register_user', auth.RegisterUser);
router.get('/login_user', auth.LoginUser);

module.exports = router;