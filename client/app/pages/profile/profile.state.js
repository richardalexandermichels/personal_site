//var fs = require('fs');
function profileState($stateProvider,$http) {
    $stateProvider
        .state('profile', {
            url: '/profile',
            templateUrl: '/app/pages/profile/profile.html',
            controller: 'ProfileCtrl as profileCtrl',
            resolve: {
                jobs: function($http) {
                    return $http.get('/api/experience')
                        .then(function(res) {
                            return res.data
                        });
                }
            }
        })
}
profileState.$inject = ['$stateProvider'];
module.exports = profileState
