angular
    .module('cne')
    .controller('loginController', loginController);

loginController.$inject = ['$scope','$log', '$location', 'firebaseService'];

/* @ngInject */
function loginController($scope, $log, $location, firebaseService) {

	//define view model variable
	var vm = this;
	vm.credentials = {
		username: "",
		password: ""
	}
	vm.active = {
		username: false,
		password: false
	};
		
	$log.info('in the login controller');	//TODO: TAKE THIS OUT LATER

	//define local functions

	//define view model functions
	vm.submitCreds = function(user, pass) {

		//notify the user
		$log.info('got these creads', user, pass);

		//run any sort of validation

		//pass the creds to firebase
		firebaseService.authenticateUser(user, pass).then(function success(s) {
			//notify the success
			console.log('success', s);	

			//is the user an employee or a customer
			

			//redirect to the user account
			$location.path('/teamMember/' + s.uid);
			//initiate the digest loop
			$scope.$apply();

		}).catch(function error(e) {
			//notify the error
			console.log('error', e);
		});	

	}

	//run the test


}