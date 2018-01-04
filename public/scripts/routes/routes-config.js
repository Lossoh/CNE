/*
*	ROUTES-CONFIG
*
*	This module sets up all the required angular routes for this web app.
*/
angular
    .module('cne')
    .config(config);
/* @ngInject */
function config($routeProvider) {
	$routeProvider
	.when('/', {
        templateUrl: 'views/landingPage.htm',      //'views/mainPage.htm'
        controller: 'landingController',           //'mainController'
        controllerAs: 'vm'
    })
	.otherwise({
        redirectTo: '/'
    });
}