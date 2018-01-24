angular
    .module('cne')
    .factory('firebaseFactory', firebaseFactory);

firebaseFactory.$inject = ['$firebase', '$firebaseObject', '$firebaseArray'];

/* @ngInject */
function firebaseFactory($firebase, $firebaseObject, $firebaseArray) {

	var FB = {
		ref: firebase.database().ref().child('cme'),
		getObject: getObject,
		getArray: getArray
	};

	function getObject() {
		//define local variables
		var self = this;
		
	}
	function getArray() {}

  	//add 
    return FB;	
}