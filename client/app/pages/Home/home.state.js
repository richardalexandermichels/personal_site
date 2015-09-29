//var fs = require('fs');
var HomeCtrl = require('./home.controller.js');

function homeState($stateProvider, $http) {
    $stateProvider
        .state('HOME', {
            url: '/home',
            templateUrl: '/app/pages/Home/home.html',
            controller: HomeCtrl,
            controllerAs: 'home'
        })
}
homeState.$inject = ['$stateProvider'];
module.exports = homeState