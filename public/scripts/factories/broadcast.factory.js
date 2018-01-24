angular
    .module('cne')
    .factory('firebaseFactory', firebaseFactory);

firebaseFactory.$inject = ['$log', '$firebase'];

/* @ngInject */
function firebaseFactory($firebase) {
	// Initialize Firebase
  	var config = {
	    apiKey: "AIzaSyBU0GN9eXU70aN9N6fU0EDyxabrFKuyt8c",
	    authDomain: "testproject-a61c3.firebaseapp.com",
	    databaseURL: "https://testproject-a61c3.firebaseio.com",
	    projectId: "testproject-a61c3",
	    storageBucket: "testproject-a61c3.appspot.com",
	    messagingSenderId: "868758732491"
  	};
  	firebase.initializeApp(config);

    return null;	
}