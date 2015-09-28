//var fs = require('fs');
function homeState($stateProvider, $http) {
    $stateProvider
        .state('HOME', {
            url: '/home',
            templateUrl: '/app/pages/home/home.html'
        })
}
homeState.$inject = ['$stateProvider'];
module.exports = homeState