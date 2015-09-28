//var fs = require('fs');
function homeState($stateProvider, $http) {
    $stateProvider
        .state('HOME', {
            url: '/home',
            templateUrl: '/app/pages/Home/home.html'
        })
}
homeState.$inject = ['$stateProvider'];
module.exports = homeState