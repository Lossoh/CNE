/*
*	ROUTES-CONFIG
*
*	This module sets up all the required angular routes for this web app.
*/
angular
    .module('cne')
    .config(config);
/* @ngInject */
function config($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
    $routeProvider
	//PUBLIC ROUTES
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

    //PRIVATE ROUTES
    .when('/teamMember/:employeeId', {
        templateUrl: 'views/teammemberDashboard.htm',      //'views/mainPage.htm'
        controller: 'teammemberDashboardController',           //'mainController'
        controllerAs: 'vm',
        resolve: { /* @ngInject */
            authentication: authentication
        }
    })
    .when('/teamMember/cmemanager/:employeeId', {
        templateUrl: 'views/cmemanager.htm',      //'views/mainPage.htm'
        controller: 'cmeManagerController',           //'mainController'
        controllerAs: 'vm',
        resolve: { /* @ngInject */
            authentication: authentication
        }
    })
    .when('/myAccount/:userId', {
        templateUrl: 'views/customerDashboard.htm',      //'views/mainPage.htm'
        controller: 'customerDashboardController',           //'mainController'
        controllerAs: 'vm',
        resolve: { /* @ngInject */
            authentication: authentication
        }
    })
	.otherwise({
        redirectTo: '/'
    });
}

/*
*   REQUIRED FUNCTIONS
*
*/
function authentication() {

    console.log('authenticating');  //TODO: TAKE THIS OUT LATER
};