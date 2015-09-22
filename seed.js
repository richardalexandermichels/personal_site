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


//var Address = Promise.promisify(mongoose.model('Address'));
//var Address = mongoose.model('Address');
// var Job = Promise.promisify(mongoose.model('Job'));

var Address = Promise.promisifyAll(mongoose.model('Address'));
var Position = Promise.promisifyAll(mongoose.model('Position'))
var Job = Promise.promisifyAll(mongoose.model('Job'));

var createAddress = function(line1, line2, city, state, zip) {

    return {
        line1: line1,
        line2: line2,
        city: city,
        state: state,
        zip: zip
    }

}

var createJob = function(company, address, position, startDate, endDate) {
    // console.log('what is address', address);
    return {
        company: company,
        address: address,
        position: position,
        startDate: startDate,
        endDate: endDate
    }
}

var createPosition = function(title, position, startDate, endDate) {
    return {
        title: title,
        position: position,
        startDate: startDate,
        endDate: endDate
    }
}

//currying
//
//var markitJob = new createJob('Markit', markitAddress, markitPositions, '8/10/2010', '6/5/2015');
var markitJob = new createJob('Markit', null, null, '8/10/2010', '6/5/2015');
console.log('what is MarkitJob', markitJob);
var seedJobs = function() {

    var markitAddress = createAddress('620 8th Avenue', '35th Floor', 'New York', 'NY', '10018');
    var markitPosition1 = new createPosition(
        'Vice President',
        'Product Mananger',
        '1/1/2014',
        '6/5/2015'
    );

    var markitPosition2 = new createPosition(
        'Assistant Vice President',
        'Project Manager / Business Analyst',
        '1/1/2012',
        '12/31/2013'
    );


    var markitPosition3 = new createPosition(
        'Associate',
        'Project Analyst',
        '8/10/2010',
        '12/31/2011'
    );

    var markitPositions = [markitPosition1,markitPosition2,markitPosition3]
    
    
   
    return Address.createAsync(markitAddress)
        .then(function(address){
            console.log('what is address', address);
            markitJob.address=address;
            return Position.createAsync(markitPositions)
        })
        .then(function(positions){
            markitJob.position = positions;
            return Job.createAsync(markitJob);
        }).then(function(job){
            console.log('what is result job', job);
            return Job.findOne(job)
                .populate(['position', 'address'])
                .exec([markitJob.position, markitJob.address])
        })
        .then(function(result){
            console.log('what is result', result)
        })
        .catch(function(e){
            console.log('error', e);
        })


    

    // return Position.createAsync(markitPositions)
    //         .then(function(item){
    //             Jobs.createAsync(markitJob)
                
    //         })
    //         .then(function(job){
    //             return Job.findOne()
    //         })
    //         .catch(function(e){
    //             console.log('what is error here', e)
    //         })
    // return Job.createAsync(markitJob)
    //     .then(function(item) {
    //         return Job.findOne(item)
    //             //.populate('address')
    //             //.exec(markitAddress.save())
    //             .populate(['position', 'address'])
    //             .exec([[markitPosition1.save(),markitPosition2.save(),markitPosition3.save()],markitAddress.save()])
    //     })
    //     .then(function(savedJob) {
    //         console.log('what is saved', savedJob);
    //         return;
    //     })
    //     .catch(function(e) {
    //         console.log('waht is error', e);
    //     })


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
