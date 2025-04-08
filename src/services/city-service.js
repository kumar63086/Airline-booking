const { AppError } = require('../utils/error/Aap-errors');
const { StatusCodes } = require('http-status-codes');
const CityRepository = require('../repositories').CityRepository;

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        //console.log(error);
        if (error.name == "SequelizeValidationError" ||error.name =='SequelizeUniqueConstraintError') {
            const explanation = error.errors.map(err =>err.message);
            throw new AppError(
                explanation.join(', '),
                StatusCodes.BAD_REQUEST
            );
        }

        throw new AppError(
            "Something went wrong while creating the city",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = {
    createCity
};
