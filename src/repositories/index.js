const AirportRepository = require('./airport-repositories');



module.exports = {
    AirplaneRepository: require('./airplane-repositories'),
    CityRepository:require('./city-repositories'),
    AirportRepository:AirportRepository
};