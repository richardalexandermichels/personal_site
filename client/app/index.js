'use strict';


// var dependencies = [
// 'meanResume']

var angular = require('angular');
var app = angular.module('app', [

	require('angular-ui-bootstrap'),
	require('angular-ui-router'),
	require('./navbar').name,
	require('./pages').name
	])
    .config(require('./config'));

//console.log('yo name' , require('./navbar').name);

module.exports = app;
