// needs to have an id, title, body, date created
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Notes extends Model {}

Notes.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    body: {
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
  },
  {
    sequelize,
  }
);

model.exports = Notes;
