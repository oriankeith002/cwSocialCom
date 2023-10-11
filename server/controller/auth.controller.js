const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");
const config = require('../config/config');


//generate a salt 
const bcryptSalt = bcrypt.genSaltSync(10); 


const signin = asyncHandler(async(req,res) => {

})


const signout = asyncHandler(async(req,res) => {

}) 


module.exports = {signin, signout}