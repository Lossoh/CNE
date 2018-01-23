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
    .when('/login', {
        templateUrl: 'views/loginPage.htm',      //'views/mainPage.htm'
        controller: 'loginController',           //'mainController'
        controllerAs: 'vm'
    })
    .when('/forgotPassword', {
        templateUrl: 'views/login-forgotPasswordPage.htm',      //'views/mainPage.htm'
        controller: 'forgotPasswordController',           //'mainController'
        controllerAs: 'vm'
    })
    .when('/createLogin', {
        templateUrl: 'views/login-createLoginPage.htm',      //'views/mainPage.htm'
        controller: 'createLoginController',           //'mainController'
        controllerAs: 'vm'
    })
    .when('/find', {
        templateUrl: 'views/locationsPage.htm',      //'views/mainPage.htm'
        controller: 'locationsController',           //'mainController'
        controllerAs: 'vm'
    })
    .when('/shop', {
        templateUrl: 'views/shoppingPage.htm',      //'views/mainPage.htm'
        controller: 'shoppingController',           //'mainController'
        controllerAs: 'vm'
    })
	.otherwise({
        redirectTo: '/'
    });
}