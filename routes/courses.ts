const express = require('express')

const router = express.Router()
const courseController = require('../controllers/courses.ts')

router.get('/', courseController.getAll)
router.post('/getone', courseController.getOne)
router.post('/add', courseController.addCourse)

module.exports = router