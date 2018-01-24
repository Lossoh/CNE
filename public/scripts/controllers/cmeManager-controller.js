angular
    .module('cne')
    .controller('cmeManagerController', cmeManagerController);

cmeManagerController.$inject = ['$scope', '$log', 'firebaseService', 'schemaFactory'];

/* @ngInject */
function cmeManagerController($scope, $log, firebaseService, schemaFactory) {

	//$log.info('in the CME Manager controller');	//TODO: TAKE THIS OUT LATER

	//define view model variable
	var vm = this;
	var newCME = schemaFactory.newCME();
	
	//define view model variable
	vm.focusrecord = "";

	//DEFINE PRIVATE FUNCTIONS
	function create() {};
	function read() {};
	function update() {};
	function del() {};

	//DEFINE THE VIEW MODEL FUNCTIONS
	/*
	*	Add a new CME
	*/
	vm.createCME = function() { firebaseService.create('array', 'cmeList', newCME); };

	
}