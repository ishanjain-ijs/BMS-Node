const {Sequelize,DataTypes} = require('sequelize')
const sequelize = require('../db/conn');
sequelize.authenticate()
.then(()=>{
    console.log('connectedd');
})
.catch(err =>{
    console.log("Error"+err);
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync({force:true,match:/bms$/})
.then(()=>{
    console.log('yes re-sync');
})


db.users = require('./userSchema')
db.posts = require('./postSchema')
db.category = require('./categorySchema')


db.users.hasMany(db.posts, {foreignKey: 'username'});
db.posts.belongsTo(db.users, {foreignKey: 'username'});

db.users = require('./userSchema')
module.exports = db;