const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Welcome to Cryptobridge')
})

const courses = require('./courses.ts')
const users = require('./user.ts')

router.use('/courses', courses)
router.use('/users', users)

module.exports = router