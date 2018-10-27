var session = require('../controllers/session.controller');
const express = require('express');
const router = express.Router();

router.get('/get_sessions/:token', session.GetSessions);
router.post('/create_session', session.CreateSession);

module.exports = router;