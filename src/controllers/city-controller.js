const {StatusCodes} = require('http-status-codes');
const {CityService} = require('../services');
const errorResponse = require("../utils/common").errorResponse;
const successResponse = require("../utils/common").successResponse;


async function createCity(req, res) {

try {
    const city = await CityService.createCity({
       
        name : req.body.name,
    });
    successResponse.data = city;
     return  res.status(StatusCodes.CREATED).json(successResponse);
} catch (error) {
    errorResponse.error = error;
    return  res.status(error.statusCode).json(errorResponse);
}

}

module.exports = {
    createCity
};