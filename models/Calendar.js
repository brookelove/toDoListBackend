// needs to have an id, title, notes, date, type, and location
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Calender extends Model {}

Calender.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    date_created: {
      type: DataTypes.DATE,
      isDate: true,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      //   might need to create a custom validaor  for the location but can do that on the react side
      //   isLocation:
    },
  },
  {
    sequelize,
  }
);
