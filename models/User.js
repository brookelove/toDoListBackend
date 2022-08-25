// needs an id, name, email, password, total notes created
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");
const bcrypt = require("bcrypt");
class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      // before storing it change it to be bcrypted 5 times then return the user data back
      beforeCreate: async (userData) => {
        userData.password = await bcrypt.hash(userData.password, 5);
        return userData;
      },
    },
    sequelize,
  }
);

model.exports = User;
