//var fs = require('fs');
function config($stateProvider) {
    $stateProvider
        .state('experience', {
            url: '/experience',
            templateUrl: './experience.html',
            controller: require('./experience.controller.js'),
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

module.exports = config