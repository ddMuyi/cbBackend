const mongoose = require('mongoose')
const schema = mongoose.Schema

const CourseSchema = new schema({
    title:String,
    description:String,
    price:String,
    content:String
})

const Course = mongoose.model('Course', CourseSchema)
module.exports = Course