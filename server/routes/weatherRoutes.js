const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/current/:city', weatherController.getCurrentWeather);
router.get('/forecast/:city', weatherController.getWeatherForecast);

module.exports = router;