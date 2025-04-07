const {StatusCodes} = require('http-status-codes');
const {AirplaneService} = require('../services');
const errorResponse = require("../utils/common").errorResponse;
const successResponse = require("../utils/common").successResponse;

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        successResponse.data = airplane;
         return  res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
      return  res.status(error.statusCode).json(errorResponse);
    }
}
async function getAirplanes(req,res){
    try {
        const airplane = await AirplaneService.getAirplanes();
        successResponse.data = airplane;
         return  res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
      return  res.status(error.statusCode).json(errorResponse);
    }
}
async function getAirplane(req,res){
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        successResponse.data = airplane;
         return  res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
      return  res.status(error.statusCode).json(errorResponse);
    }
}

async function destroyAirplane(req,res){
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        successResponse.data = airplane;
         return  res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
      return  res.status(error.statusCode).json(errorResponse);
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
};