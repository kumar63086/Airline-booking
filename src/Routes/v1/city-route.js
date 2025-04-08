const express = require('express');
const router = express.Router();
const {cityController} = require('../../controllers');
const cityMiddlewares= require('../../middleware/city-middleware');
router.post('/',cityMiddlewares.validateCreateRequest,cityController.createCity);

module.exports = router;