'use strict';
var angular = require('angular');
var navbar = require('./navbar/navbar.directive.js');
var app = angular.module('MeanResume', [
	require('angular-ui-bootstrap'),
	require('angular-ui-router'),
	]);

app.config(function($urlRouterProvider,$locationProvider) {
		$locationProvider.html5Mode(true);
    	$urlRouterProvider.otherwise('/');
	})

app.directive('navbar', ['$http', navbar]);
// app.directive('navbar',navbar);