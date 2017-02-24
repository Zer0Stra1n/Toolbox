'use strict';

var path = require('path'),
    api = module.exports;

api.main = (req, res) => {
    res.send('Hello World');
    // res.sendFile(path.resolve(__dirname, '<path to app shell here>'));
};