// needs an id, name, email, password, total notes created
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});
