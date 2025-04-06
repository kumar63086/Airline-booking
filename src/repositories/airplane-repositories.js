const CurdRepositories = require('./Curd-repositories');
const Airplane = require('../models').Airplane;

class AirplaneRepository extends CurdRepositories {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;