const Sequelize = require('sequelize')
// const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const Post = sequelize.define("Post", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  desc: {
      type: Sequelize.STRING,
      allowNull: false
  },
  photo: {
    type: Sequelize.BLOB("long"),
    // allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Post;