const CurdRepositories = require('./Curd-repositories');
const City = require('../models').City;

class CityRepository extends CurdRepositories {
    constructor() {
        super(City);
    }
}

module.exports = CityRepository;