const Sequelize = require('sequelize')
// const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const User = sequelize.define("User", {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
      type: Sequelize.STRING,
      allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpassword: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = User;