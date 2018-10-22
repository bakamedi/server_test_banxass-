var user = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

router.get('/users_type', user.GetUsersByType);
module.exports = router;