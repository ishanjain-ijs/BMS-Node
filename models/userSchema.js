// const jwt = require('jsonwebtoken');
const mongooose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongooose.Schema({
    full_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true, 
        unique: true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    cpassword: {
        type: String,
        required:true
    },



    refreshToken: String
});
const User = mongooose.model('User', userSchema);

module.exports = User;

