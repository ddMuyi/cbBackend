const express =  require('express')

const userController = {}

const users = require('../model/user.ts')

userController.getAllUsers = async(req, res)=>{
    try{
        let allUsers = await users.find().lean()
        return res.json({success:true, allUsers})
    }
    catch(err){
        return res.json({sucess:false, message:err.message})
    }
}

userController.createUser = async(req, res)=>{
    let {firstName, lastName, email, phoneNumber, role} = req.body
    try{
        let existingUser = users.findOne({phoneNumber:phoneNumber}).lean()
        if(existingUser) {
            res.json({success:false, message:'User already exists'})
            return
        }
        const newUser = users({firstName, lastName, email, phoneNumber, role})
        newUser.save()
        .then(savedUser=>{
            res.json({success:true, createdUser:savedUser})
        })
        .catch(err=>{
            res.json({sucess:false, message:err.message})
        })
    }
    catch(err){
        res.json({sucess:false, message:err.message})
    }
}

module.exports = userController