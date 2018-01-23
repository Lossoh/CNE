angular
    .module('cne')
    .controller('createLoginController', createLoginController);

createLoginController.$inject = ['$scope','$log'];

/* @ngInject */
function createLoginController($scope, $log) {

	//define view model variable
	var vm = this;
	
	$log.info('in the login-createLogin controller');	//TODO: TAKE THIS OUT LATER

	//define local functions

	//run the test


}