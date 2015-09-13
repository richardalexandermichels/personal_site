'use strict';
var states = require('./states');

module.exports = function($http) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: '/app/navbar/navbar.html',
        link: function(scope) {
            //this is for the hamburger responsive icon
            scope.spans = new Array(3);
            console.log('states', states);
            scope.items = states;
            console.log('scopey items', scope.items);
            // scope.items = [
            //     { label: 'Home', state: 'home' },
            //     { label: 'Profile', state: 'profile' },
            //     { label: 'Portfolio', state: 'portfolio' },
            //     { label: 'Services', state: 'services'},
            //     { label: 'Experience', state: 'experience'},
            //     { label: 'References', state: 'references'},
            //     { label: 'Skills', state: 'skills'},
            //     { label: 'Contact', state: 'contact'}
            //     //{ label: 'Members Only', state: 'membersOnly', auth: true }
            // ];
        }
    }
}
