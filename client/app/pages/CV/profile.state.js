//var fs = require('fs');
function profileState($stateProvider, $http) {
    $stateProvider
        .state('CV', {
            url: '/profile',
            templateUrl: '/app/pages/CV/profile.html'
        })
}
profileState.$inject = ['$stateProvider'];
module.exports = profileState