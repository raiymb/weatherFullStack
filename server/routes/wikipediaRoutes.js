const express = require('express');
const router = express.Router();
const cityController = require('../controllers/wikipediaController');

router.get('/:city', cityController.getCityInfo);

module.exports = router;