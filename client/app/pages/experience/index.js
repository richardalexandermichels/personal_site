'use strict'

// module.exports = angular.module('experience', [
// 	 require('./job').name])
// 	.controller('ExperienceCtrl', require('./experience.controller.js'))
// 	.config(require('./experience.state.js'))


module.exports = angular.module('experience', [])
	.directive('job', require('./job/job.directive.js'))
	.controller('ExperienceCtrl', require('./experience.controller.js'))
	.config(require('./experience.state.js'))
	