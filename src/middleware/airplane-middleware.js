const {StatusCodes} = require('http-status-codes');

function validateCreateAirplane(req,res,next){
    
    if(!req.body.modelNumber){
        errorResponse.message="modelNumber is required";
        errorResponse.error= new AppError("modelNumber is required",StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.capacity){
        errorResponse.message="capacity is required";
        errorResponse.error={ explanation:"capacity is required"};
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse); 
    }
    next();
}
module.exports={validateCreateAirplane};


// const { StatusCodes } = require('http-status-codes');
// const {errorResponse} = require("../utils/common");
// const { AppError } = require('../utils/error/Aap-errors');


// function validateCreateAirplane(req, res, next) {
//     if(!req.body.modelNumber) {
//         errorResponse.message = 'Something went wrong while creating airplane';
//         errorResponse.error = new AppError(['Model Number not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
//         return res
//                 .status(StatusCodes.BAD_REQUEST)
//                 .json(errorResponse);
//     }
//     next();
// }

// module.exports = {
//     validateCreateAirplane
// }