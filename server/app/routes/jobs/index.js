'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');

var Address = mongoose.model('Address');


router.get('/jobs', function (req, res) {
	var obj = [];
	_.forOwn(Address, function(item){
		obj.push(item);
	});
    res.status(200).json({'message': obj});
});