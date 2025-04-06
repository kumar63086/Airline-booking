'use strict';

/** @type {import('sequelize-cli').Migration} */
const Op = require('sequelize').Op;
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
      {
      modelNumber:'A320',
      capacity:1000,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:'A1606',
      capacity:500,
      createdAt:new Date(),
      updatedAt:new Date()
    }

  ], {});
  },  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', {[Op.or]:[{modelNumber:A320},{modelNumber:A1606}]}, {});
  }
};
