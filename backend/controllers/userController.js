const JWT = require('jsonwebtoken')
const crypt_pass = require('bcryptjs')
const aysncHandler = require('express-async-handler')
const User = require('../model/userModel')

const generate_JWT = (id) => {
  return JWT.sign({id},process.env.JWT_SECRET,{
    expiresIn: '30d'
  })
}

const registerUser = aysncHandler( async (req,res) => {

  const {name, email, password} = req.body;

  if(!name || !email || !password){
    res.status(400)
    throw new Error('Please add all fields')
  }

  const userExists = await User.findOne({email});

  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }

  const pass_salt = await crypt_pass.genSalt(10);
  const hashedPass = await crypt_pass.hash(password, pass_salt);

  const user = await User.create({
    name,
    email,
    password: hashedPass
  })

  if(user){
    res.status(201).json({
      _id: user.id,
      email: user.email,
      name: user.name,
      token: generate_JWT(user._id)
    })
  }
  else{
    res.status(400)
    throw new Error('Invalid user data')
  }

  
})

const loginUser = aysncHandler(async (req,res) => {

  const {email, password} = req.body;

  if(!email || !password){
    res.status(400)
    throw new Error('Please add all fields')
  }

  const user = await User.findOne({email});

  if(user && (await crypt_pass.compare(password, user.password))){
    res.status(201).json({
      _id: user.id,
      email: user.email,
      name: user.name,
      token: generate_JWT(user._id)
    })
  }
  else{
    res.status(400)
    throw new Error('Invalid Credentials')
  }
 
})

const getCurrentUser = aysncHandler(async (req,res) => {

  const {_id,email,name} = await User.findById(req.user.id)

  res.status(201).json({
    id: _id,
    name,
    email
  })

})

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser
}