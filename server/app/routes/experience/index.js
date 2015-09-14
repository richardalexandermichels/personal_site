'use strict';
var _ = require('lodash');
var Job = require('mongoose').model('Job');
var router = require('express').Router();

module.exports = router;

router.get('/', function (req, res, next) {
	console.log('start')
	Job.find().exec()
		.then(function(item){
			if(item) res.json(item);
			else return;
		})
		.then(null,next);

	
 
});