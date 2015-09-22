
function ExperienceCtrl($scope, jobs){
	$scope.jobs = jobs;

	this.reveal=true;
	console.log('what is jobs', jobs);
	console.log("what is reveal", this.reveal);
}

ExperienceCtrl.$inject = ['$scope', 'jobs'];
module.exports = ExperienceCtrl;