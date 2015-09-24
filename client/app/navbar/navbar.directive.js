'use strict';
//var states = require('../states');
//var _ = require('lodash');

var stateItems = [];
var states = require('../pages');



function navbar() {
    console.log('what is states', states.requires);
    return {
        restrict: 'E',
        scope: {},
        templateUrl: '/app/navbar/navbar.html',
        link: function(scope) {
            //this is for the hamburger responsive icon
            scope.spans = new Array(3);
            scope.items = require('../pages').requires
        }
    };
}


module.exports = navbar;