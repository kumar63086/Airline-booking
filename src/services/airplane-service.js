
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
   //console.log(error.name);
    if(error.name == "SequelizeValidationError"){
       let explanation=[] 
       error.errors.forEach(err=>{
           explanation.push(err.message);
       })
       //console.log(explanation);
    throw new AppError("cannot create airplane",StatusCodes.BAD_REQUEST);
   
    }
    throw new AppError("cannot create airplane",StatusCodes.INTERNAL_SERVER_ERROR);;
}
}

async function getAirplanes() {
    try {
        const airplane = await airplaneRepository.getAll();
        return airplane;
    } catch (error) {
        throw new AppError("cannot get airplane",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
 
async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id);

        return airplane;
    } catch (error) {

        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("cannot get airplane",StatusCodes.NOT_FOUND);
        }
        throw new AppError("cannot get airplane",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id) {
    try {
        const airplane = await airplaneRepository.destroy(id);
        return airplane;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("cannot destroy airplane",StatusCodes.NOT_FOUND);
        }
        throw new AppError("cannot destroy airplane",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id,data) {
    try {
        const airplane = await airplaneRepository.update(id,data);
        return airplane;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("cannot update airplane",StatusCodes.NOT_FOUND);
        }
        throw new AppError("cannot update airplane",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createAirplane
    ,getAirplanes
    ,getAirplane,
    destroyAirplane,
    updateAirplane
};