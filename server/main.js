'use strict';

var chalk = require('chalk');

// Requires in ./db/main.js -- which returns a promise that represents
// mongoose establishing a connection to a MongoDB database.
var startDb = require('./db');

var server = require('http').createServer();

var createApplication = function() {
    var app = require('./app');
    server.on('request', app); // Attach the express application
    require('./io')(server); // Attach socket.io
}

var startServer = function() {
    console.log("ENV PORT PLS", process.env);
    var PORT = process.env.PORT || 80;

    server.listen(PORT, function() {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};

startDb
    .then(createApplication)
    .then(startServer)
    .catch(function(err) {
        console.log(chalk.red(err.stack));
        process.kill(1);
    });