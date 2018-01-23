angular
    .module('cne')
    .controller('forgotPasswordController', forgotPasswordController);

forgotPasswordController.$inject = ['$scope','$log'];

/* @ngInject */
function forgotPasswordController($scope, $log) {

	//define view model variable
	var vm = this;
	
	$log.info('in the login-forgot Password controller');	//TODO: TAKE THIS OUT LATER

	//define local functions

	//run the test


}