const {StatusCodes} = require('http-status-codes');
const {errorResponse} = require("../utils/common");
const { AppError } = require('../utils/error/Aap-errors');
function validateCreateRequest(req,res,next){
    
    if(!req.body.name){
        errorResponse.message="something went wrong while createing name";
        errorResponse.error= new AppError("name is required",StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse);
    }
    
    next();
}
module.exports={validateCreateRequest};