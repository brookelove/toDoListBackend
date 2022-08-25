// needs to have an id, name, photo, title, type
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Board extends Model {}

Board.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    photo: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  },
  {
    sequelize,
  }
);
