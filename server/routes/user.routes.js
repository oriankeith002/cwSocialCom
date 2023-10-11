const express = require('express');
const router = express.Router();
const { 
    createUser, 
    getAllUsers, 
    getUserById, 
    deleteAUser, 
    updateUserDetail 
} = require('../controller/user.controller');



router.post("/signup",createUser);
router.get("/users",getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id",deleteAUser);
router.put("/edit",updateUserDetail)


module.exports = router;