const { StatusCodes } = require('http-status-codes');

const { errorResponse } = require('../utils/common');
const AppError = require('../utils/error/Aap-errors');

function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        errorResponse.message = 'Something went wrong while creating airport';
        errorResponse.error = new AppError(['name not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse);
    }
    if(!req.body.code) {
        errorResponse.message = 'Something went wrong while creating airport';
        errorResponse.error = new AppError(['Airport code not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse);
    }
    if(!req.body.cityId) {
        errorResponse.message = 'Something went wrong while creating airport';
        errorResponse.error = new AppError(['City Id not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}