//var fs = require('fs');
var HomeCtrl = require('./home.controller.js');

function homeState($stateProvider, $http) {
    $stateProvider
        .state('HOME', {
            abstract: true,
            templateUrl: '/app/pages/Home/home.html',
            controller: HomeCtrl,
            controllerAs: 'home',
        })
        .state('HOME.nest', {
            url: '/home',
            views: {
                'coop': {
                    templateUrl: "/app/pages/CV/profile.html"
                }
            }
        })
}
homeState.$inject = ['$stateProvider'];
module.exports = homeState