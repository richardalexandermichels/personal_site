function funState($stateProvider, $http) {
    $stateProvider
        .state('FUN', {
            url: '/fun',
            templateUrl: '/app/pages/fun/fun.html'
        });
}
funState.$inject = ['$stateProvider'];
module.exports = funState