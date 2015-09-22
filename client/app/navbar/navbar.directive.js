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
            // scope.items = [{
            //         label: 'Home',
            //         state: 'home'
            //     }, {
            //         label: 'Profile',
            //         state: 'profile'
            //     }, {
            //         label: 'Portfolio',
            //         state: 'portfolio'
            //     }, {
            //         label: 'Services',
            //         state: 'services'
            //     }, {
            //         label: 'Experience',
            //         state: 'experience'
            //     }, {
            //         label: 'References',
            //         state: 'references'
            //     }, {
            //         label: 'Skills',
            //         state: 'skills'
            //     }, {
            //         label: 'Contact',
            //         state: 'contact'
            //     }
                //{ label: 'Members Only', state: 'membersOnly', auth: true }
            //];
        }
    }
}


module.exports = navbar;
