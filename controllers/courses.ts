const express = require('express')

const coursesController = {}

const course = require('../model/course.ts')

coursesController.getAll = async (req, res)=>{
    try{
        const courses = await course.find().lean()
        return res.json({success:true, courses})
    }
    catch(err){
        return res.json({ success: false, message: err.message });
    }
}

coursesController.getOne = async (req, res)=>{
    try{
        const foundCourse = await course.findOne({_id:req.body._id}).lean()
        return res.json({success:true, course:foundCourse})
    }
    catch(err){
        return res.json({success:true, message:err.message})
    }
}

coursesController.addCourse = async (req, res)=>{
    const {title, description, price, content} = req.body
    try{
        const newCourse = course({title, description, price, content})
        newCourse.save()
        .then(savedCourse=>{
            res.json({success:true, course:savedCourse})
        })
        .catch(err=>{
            res.json({success:false, message:'Couldnt save'})
        })
    }
    catch(err){
        res.json({success:false, message:err.message})
    }
}

module.exports = coursesController