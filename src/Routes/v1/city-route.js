const express = require('express');
const router = express.Router();
const {cityController} = require('../../controllers');

router.post('/',cityController.createCity);

module.exports = router;