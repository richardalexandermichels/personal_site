/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');


var Address = Promise.promisifyAll(mongoose.model('Address'));
var Job = Promise.promisifyAll(mongoose.model('Job'));
//var Job = Promise.promisifyAll(mongoose);

var createAddress = function(line1, line2, city, state, zip) {
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.state = state;
    this.zip = zip;

}

var createJob = function(company, address, title, position, startDate, endDate) {
    this.company = company;
    this.address = address;
    this.title = title,
    this.position = position,
    this.startDate = startDate,
    this.endDate = endDate
}

var seedJobs = function() {

    var markitAddress = new createAddress('620 8th Avenue', '35th Floor', 'New York', 'NY', '10018');

    var markit = new createJob(
        'Markit',
        {
            line1: '620 8th Avenue',
            line2: '35th Floor',
            city: 'New York',
            state: 'NY',
            zip: '10018'
        },
        'Vice President',
        'Product Mananger',
        '8/10/2010',
        '6/5/2015'
    );

    // var jobs = [{
    //     email: 'testing@fsa.com',
    //     password: 'password'
    // }, {
    //     email: 'obama@gmail.com',
    //     password: 'potus'
    // }];
    var jobs = [markit];
    return Job.createAsync(jobs);

};

connectToDb.then(function() {
    Job.findAsync({}).then(function(jobs) {
        if (jobs.length === 0) {
            return seedJobs();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    }).then(function() {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function(err) {
        console.error(err);
        process.kill(1);
    });
});
