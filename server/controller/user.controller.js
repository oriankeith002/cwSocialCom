const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");
const config = require('../config/config');


//generate a salt 
const bcryptSalt = bcrypt.genSaltSync(10); 


const createUser = asyncHandler(async(req,res) => {
    const {email} = req.body.email;
    const findUser = await User.findOne(email)

    if(!findUser) {
        const {name,email,password} = req.body;
        const newUser = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password,bcryptSalt),
        });
        res.json(newUser);
    } else {
        throw new Error('The user already exists')
    }
}) 



const getAllUsers = asyncHandler(async(req,res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch(error) {
        throw new Error(error)
    }
}) 


const getUserById = asyncHandler(async(req,res) => {
    const {id} = req.params;
    
    try {
        const user = await User.findById(id);
        res.json(user)
    } catch (error) {
        throw new Error(error)
    }
}) 


const updateUserDetail = asyncHandler(async(req,res) => {
    const {_id} = req.user;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {
                name:req?.body?.name,
                email:req?.body?.email,
            },
            {
                new:true,
            },
        )
        res.json(updatedUser)
    } catch (error) {
        throw new Error(error);
    }
})

const deleteAUser = asyncHandler(async(req,res) => {
    const {id} = req.params;

    try {
        const userToDelete = await User.findByIdAndDelete(id);
        res.json({
            message: `User with id : ${id} has been deleted`,
            details: userToDelete,
        })
    } catch(error) {
        throw new Error(error);
    }
}) 


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserDetail,
    deleteAUser,
}