'use strict';

var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    port = 3000;

//Set up basic configs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set up static pass-throughs
// app.use('/', express.static(path.join(__dirname, '<path to webroot>')));
// app.use('/fonts', express.static(path.join(__dirname, '<path to fonts>')));
console.log('Express Setup static passthrough completed');

//Routes
console.log('Initializing Routes');

app.route('/').get(routes.main);

console.log('Application Started');
console.log('Current Working Directory', process.cwd());

//Start App
app.listen(port);