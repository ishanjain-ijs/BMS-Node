const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { fullName, email, username, password, cpassword  } = req.body;
    if (!fullName|| !email || !username || !password || !cpassword) return res.status(400).json({ 'message': 'All fields are required.' });

    
    // const duplicate = await User.findOne({ email: email }).exec();
    // if (duplicate) return res.sendStatus(409); 

    try {
        
        const hashedPwd = await bcrypt.hash(password, 10);
        const hashedCPwd = await bcrypt.hash(cpassword, 10);


        
        const result = await User.create({
            "fullName": fullName,
            "email": email,
            "username": username,
            "password": hashedPwd,
            "cpassword": hashedCPwd
        })
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
        res.status(201).json({ 'success': `New user ${fullName} created!` , result});
    } 
    catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };