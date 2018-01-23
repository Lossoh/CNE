angular
    .module('cne')
    .controller('locationsController', locationsController);

locationsController.$inject = ['$scope','$log'];

/* @ngInject */
function locationsController($scope, $log) {

	//define view model variable
	var vm = this;
	
	$log.info('in the locations controller');	//TODO: TAKE THIS OUT LATER

	//define local functions

	//run the test


}