const express = require('express');
const { saveGoals } = require('../controllers/healthGoalsController');
const router = express.Router();

router.post('/', saveGoals);

module.exports = router;
