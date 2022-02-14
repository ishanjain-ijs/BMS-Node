const Sequelize = require('sequelize')
// const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const Category = sequelize.define("Category", {
  catName: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Category;