function job(){
	return {
		restrict: "EA",
		scope:{
			job: '='
		},
		templateUrl:'/app/pages/experience/job/job.html'
	}
}

module.exports = job;