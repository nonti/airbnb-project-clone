const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

 const signup = async ( req, res) => {
  const { username , password, role } = req.body;
  const hashedPassword = await bcrypt.hashSync(password, 10);
  const newUser = new User({ username, password: hashedPassword, role });
  try{
    await newUser.save();
  res.status(201).json({ message: 'User created successfully' });
  }catch(err){
   res.status(500).json( err.message);
  }
  
}

module.exports = { signup }