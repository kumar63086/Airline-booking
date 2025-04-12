const  CurdRepositories = require('./Curd-repositories');
const Airport = require('../models').Airport;

class AirportRepository extends CurdRepositories {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRepository;