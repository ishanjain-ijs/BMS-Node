const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { full_name, email, username, password, cpassword  } = req.body;
    if (!full_name|| !email || !username || !password || !cpassword) return res.status(400).json({ 'message': 'All fields are required.' });

    
    const duplicate = await User.findOne({ email: email }).exec();
    if (duplicate) return res.sendStatus(409); 

    try {
        
        const hashedPwd = await bcrypt.hash(password, 10);
        const hashedCPwd = await bcrypt.hash(cpassword, 10);


        
        const result = await User.create({
            "full_name": full_name,
            "email": email,
            "username": username,
            "password": hashedPwd,
            "cpassword": hashedCPwd
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${full_name} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };