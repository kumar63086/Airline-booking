const express = require('express');
const {airplaneController} = require('../../controllers');
const router = express.Router();
const airplaneMiddlewares=require("../../middleware/airplane-middleware");
router.post('/',airplaneMiddlewares.validateCreateAirplane,airplaneController.createAirplane);
router.get('/',airplaneController.getAirplane);
module.exports = router;