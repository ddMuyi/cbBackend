"use strict";
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Welcome to Cryptobridge');
});
const courses = require('./courses.ts');
router.use('/courses', courses);
module.exports = router;
