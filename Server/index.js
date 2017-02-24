'use strict';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    port = 3000;

//Set up basic configs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set up static pass-throughs
// app.use('/', express.static(src));
// app.use('/fonts', express.static(fonts));
// app.use('/dist', express.static(webroot));
console.log('Express Setup static passthrough completed');

//Routes
console.log('Initializing Routes');

app.route('/').get(routes.main);

console.log('Application Started');
console.log('Current Working Directory', process.cwd());

//Start App
app.listen(port);