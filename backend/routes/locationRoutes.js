const express = require('express');
const { getNearbyLocations } = require('../controllers/locationController');
const router = express.Router();

router.get('/', getNearbyLocations);

module.exports = router;
