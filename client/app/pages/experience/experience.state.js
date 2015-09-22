//var fs = require('fs');
//
function experienceState($stateProvider) {
    $stateProvider
        .state('experience', {
            url: '/experience',
            controller: 'ExperienceCtrl as experienceCtrl',
            templateUrl: '/app/pages/experience/experience.html',
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
experienceState.$inject = ['$stateProvider'];

module.exports = experienceState
