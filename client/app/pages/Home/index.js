'use strict'
require('./home.directive.js')

module.exports = angular.module('HOME', ['FullpageScroll'])
    .config(require('./home.state.js'))