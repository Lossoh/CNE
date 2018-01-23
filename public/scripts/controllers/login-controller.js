angular
    .module('cne')
    .controller('loginController', loginController);

loginController.$inject = ['$scope','$log'];

/* @ngInject */
function loginController($scope, $log) {

	//define view model variable
	var vm = this;
	vm.username = "";
	vm.password = "";
	vm.active = {
		username: false,
		password: false
	};
	
	$log.info('in the login controller');	//TODO: TAKE THIS OUT LATER

	//define local functions

	//run the test


}