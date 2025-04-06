const { AppError } = require('../utils/error/Aap-errors');
const { StatusCodes } = require('http-status-codes');
const AirplaneRepository = require('../repositories').AirplaneRepository;

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
}
 catch (error) {
   console.log(error.name);
    if(error.name == "SequelizeValidationError"){
       let explanation=[] 
       error.errors.forEach(err=>{
           explanation.push(err.message);
       })
       console.log(explanation);
    throw new AppError("cannot create airplane",StatusCodes.BAD_REQUEST);
   
    }
    throw new AppError("cannot create airplane",StatusCodes.INTERNAL_SERVER_ERROR);;
}
}

async function getAirplane() {
    try {
        const airplane = await airplaneRepository.getAll();
        return airplane;
    } catch (error) {
        throw new AppError("cannot get airplane",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane
    ,getAirplane
};