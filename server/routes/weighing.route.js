var weighing = require('../controllers/weighing.controller');
const express = require('express');
const router = express.Router();

router.post('/get_weighing', weighing.GetWeighing);
router.post('/create_weighing', weighing.CreateWeighing);

module.exports = router;