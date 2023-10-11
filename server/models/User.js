const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name : { type:String, trim:true, required:'Name is required' },
    email: { 
        type:String, 
        trim:true,
        unique: 'Email already exists',
        match: [/.+\@.+.\..+/, 'Please provide valid email address'],
        required: 'Email is required'
    },
    password: {
        type:String, 
        required:true,
    }

},
{
    timestamps:true,
})

const UserModel = mongoose.model('User', UserSchema);


module.exports = UserModel