const {StatusCodes} = require('http-status-codes');
const {AirportService} = require('../services');
const errorResponse = require("../utils/common").errorResponse;
const successResponse = require("../utils/common").successResponse;

async function createAirport(req, res) {
    try {
        console.log(req.body);
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        successResponse.data = airport;
        return res
                .status(StatusCodes.CREATED)
                .json(successResponse);
    } catch(error) {
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(errorResponse);
    }
}

async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        successResponse.data = airports;
        return res
                .status(StatusCodes.OK)
                .json(successResponse);
    } catch(error) {
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(errorResponse);
    }
}
async function getAirport(req, res) {
    try {
        const airports = await AirportService.getAirport(req.params.id);
        successResponse.data = airports;
        return res
                .status(StatusCodes.OK)
                .json(successResponse);
    } catch(error) {
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(errorResponse);
    }
}


async function destroyAirport(req,res){
    try {
        const airport = await AirplaneService.destroyAirport(req.params.id);
        successResponse.data = airport;
         return  res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
      return  res.status(error.statusCode).json(errorResponse);
    }
}
async function updateAirport(req,res){
    try {
        const airport = await AirplaneService.updateAirport(req.params.id,req.body);
        successResponse.data = airport;
         return  res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
      return  res.status(error.statusCode).json(errorResponse);
    }
}
module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
};