const Sequelize = require('sequelize')
// const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const Comment = sequelize.define("Comment", {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Comment;