// needs to have an id, title, notes, date, type, and location
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Calender extends Model {}

Calender.init({
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
});
