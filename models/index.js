const {Sequelize,DataTypes} = require('sequelize')
const sequelize = require('../db/conn');
sequelize.authenticate()
.then(()=>{
    console.log('connected');
})
.catch(err =>{
    console.log("Error"+err);
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync({force:false,match:/bms$/})
.then(()=>{
    console.log('yes re-sync');
})


db.users = require('./userSchema')
db.posts = require('./postSchema')
db.categories = require('./categorySchema')
db.comments = require('./commentSchema')

db.users.hasMany(db.posts, {foreignKey: 'username'});
db.posts.belongsTo(db.users, {foreignKey: 'username'});

db.posts.hasMany(db.comments, {foreignkey: 'title'})
db.comments.belongsTo(db.posts, {foreignKey: 'title'})

db.users = require('./userSchema')
module.exports = db;