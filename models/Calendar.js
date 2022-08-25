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
      //   validate would be like: a string of numbers between 3 and 6 followed by a space and then another section of combo of numbers letters and spaces followed by a comma then a combination of letters either lowercase or uppercase that are between 3-17 followed by a comma and there is either 2 uppercase letters or a combo of letters that are upper and lower between 5 and twelve it can have a space followed by a comma and 5 numbers
    },
  },
  {
    sequelize,
  }
);
