angular
    .module('cne')
    .controller('teammemberDashboardController', teammemberDashboardController);

teammemberDashboardController.$inject = ['$scope','$log'];

/* @ngInject */
function teammemberDashboardController($scope, $log) {

	//define view model variable
	var vm = this;
	vm.sampleRecords = [
		{
			title:"",
			address: {},
			frequency: [
				{lable: "Monthly"},
				{lable: "Weekly"},
				{lable: "Every Other Week"}
			],
			years: [2017,2018],
			instances: [1,2,3]
		}
	];

	$log.info('in the teammemberDashboard controller');	//TODO: TAKE THIS OUT LATER

	//define local functions

	//run the test


}