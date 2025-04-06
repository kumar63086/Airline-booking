const {StatusCodes} = require('http-status-codes');
const {errorResponse} = require("../utils/common");
const { AppError } = require('../utils/error/Aap-errors');
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