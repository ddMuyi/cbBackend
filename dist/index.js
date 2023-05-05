"use strict";
require('dotenv').config();
const connectDB = require('./config/db.ts');
connectDB();
const routes = require('./routes/index.ts');
var path = require('path');
const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;
app.use('/', routes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
    console.log('The server is listerning on the port:', PORT);
});
module.exports = app;
