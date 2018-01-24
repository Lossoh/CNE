angular
    .module('cne')
    .controller('landingController', landingController);

landingController.$inject = ['$scope','$log', '$firebaseObject', 'firebaseFactory'];

/* @ngInject */
function landingController($scope, $log, $firebaseObject, firebaseFactory) {

	//define view model variable
	var vm = this;
	var ref = firebase.database().ref();
	vm.example = $firebaseObject(ref);

	$log.info('in the landing controller');	//TODO: TAKE THIS OUT LATER

	//define local functions

	//run the test


}