const express = require('express')
const router = express.Router()

const userController = require('../controllers/users.ts')

router.get('/', userController.getAllUsers)
router.post('/signup', userController.createUser)

module.exports = router