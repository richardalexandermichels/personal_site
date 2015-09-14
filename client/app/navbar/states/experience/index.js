var label = 'experience'

module.exports = function($stateProvider) {
    return {
        label: label,
        state: state
    }

}


function state($stateProvider) {
    $stateProvider.state(label, {
        url: '/experience',
        templateUrl: './experience.html',
        controller: 'ExperienceController',
        resolve: {
        	jobs: function($http) {
        		return $http.get('/api/experience')
        		.then(function(res){
        			return res.data
        		});
        	}
        }
    })
}
