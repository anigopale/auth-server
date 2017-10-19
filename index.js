// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express(); //create express app
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB setup
mongoose.connect('mongodb://localhost:auth/auth'); //creates auth named DB in mongoDB

// App setup
//middlewares, morgan and bodyParser
app.use(morgan('combined')); //does the logging of requests in terminal
app.use(cors());
app.use(bodyParser.json({ type: '*/*' })); //parses requests into JSON
router(app);

// Server Setup
const port = process.env.PORT || 3090;  //localhost
const server = http.createServer(app); //create http server, adds functionalities to app
server.listen(port);
console.log('server listening on:', port);
