const mongoose = require('mongoose')
var schema = mongoose.Schema

const userSchema = new schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
}, {
    timestamps:true
})

const User = mongoose.model('User', userSchema)
module.exports = User