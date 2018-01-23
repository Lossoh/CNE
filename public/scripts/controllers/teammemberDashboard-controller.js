angular
    .module('cne')
    .controller('teammemberDashboardController', teammemberDashboardController);

teammemberDashboardController.$inject = ['$scope','$log'];

/* @ngInject */
function teammemberDashboardController($scope, $log) {

	//define view model variable
	var vm = this;
	vm.sampleRecords = [
		{testing:"test", instances: [1,2,3]},
		{testing2:"test2"}
	];

	$log.info('in the teammemberDashboard controller');	//TODO: TAKE THIS OUT LATER

	//define local functions

	//run the test


}