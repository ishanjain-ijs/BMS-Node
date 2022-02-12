const Sequelize = require('sequelize')
// const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const User = sequelize.define("User", {
  // uid: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true 
  // },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cpassword: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = User;