const express = require('express');
const router = express.Router();
const gnewsController = require('../controllers/gnewsController'); 

router.get('/:query', gnewsController.getNews);

module.exports = router;