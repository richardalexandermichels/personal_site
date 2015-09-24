'use strict';
require('angular');
module.exports = angular.module('app', [

    require('angular-ui-bootstrap'),
    require('angular-ui-router'),
    require('./navbar').name,
    require('./pages').name
])
    .config(require('./config'));