"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    static associate(models) {
      this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
         as: 'airplaneDetail'
      });
      this.belongsTo(models.Airport, {
        foreignKey: 'departureAirportId',
        as: 'departureAirport',
      });
      this.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportId',
        as: 'arrivalAirport',
      });
    }
  }

  Flights.init(
    {
      flightNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Airplanes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      departureAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'code',
        },
        onDelete: 'CASCADE',
      },
      arrivalAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'code',
        },
        onDelete: 'CASCADE',
      },
      arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      boardingGate: {
        type: DataTypes.INTEGER,
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Flights",
    }
  );

  return Flights;
};
