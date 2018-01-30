angular
    .module('cne')
    .factory('firebaseService', firebaseService);

firebaseService.$inject = ['$firebase', '$firebaseObject', '$firebaseArray'];

/* @ngInject */
function firebaseService($firebase, $firebaseObject, $firebaseArray) {

	var FB = {
		_lists: {
			cmeList: $firebaseArray(firebase.database().ref().child('cme')),
			engagmentsList: $firebaseArray(firebase.database().ref().child('engagements'))
		},
		_objects: {
			cmeObject: $firebaseObject(firebase.database().ref().child('cme')),
			engagmentsCollection: $firebaseObject(firebase.database().ref().child('engagements'))
		},
		authenticateUser: authenticateUser,
		create: create,
		read: read,
		update: update,
		del: del
	};


	/*
	*	
	*/
	function authenticateUser(email, password) {
		//return async work
		return new Promise(function (resolve, reject) {

			firebase.auth().signInWithEmailAndPassword(email, password).then(function sucess(s) {

				resolve(s);
				
			}).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				reject({code: errorCode , message: errorMessage});

			});
		});

	};

	/*
	*	
	*/
	function create(type, name, newData) {
		//define local variables
		var self = this;

		//return async work
		return new Promise(function(resolve, reject) {
			
			//execute based on type
			if(type == 'object') {
				
				//save the object THIS DOESN'T WORK
				/*self._objects[name].$save().then(function success(s) {
					resolve(s);
				}, function error(e) {
					reject(e);
				});*/
				
			} else if(type == 'array') {
				
				//save the list
				self._lists[name].$add(newData).then(function success(s) {
					resolve(s);
				}, function error(e) {
					reject(e);
				});
				
			}

		});
		
	};

	/*
	*
	*/
	function read(type, name) {
		//define local variables
		var self = this;

		//execute based on type
		if(type == 'object') return self._objects[name];
		else if(type == 'array') return self._lists[name];
	};

	/*
	*
	*/
	function update(type, name, newData) {
		//define local variables
		var self = this;

		//return async work
		return new Promise(function(resolve, reject) {
			
			//execute based on type
			if(type == 'object') {
				
				//save the object
				self._objects[name].$save().then(function success(s) {
					resolve(s);
				}, function error(e) {
					reject('error: ' + e);
				});
				
			} else if(type == 'array') {
				
				//save the list
				self._lists[name].$add(newData).then(function success(s) {
					resolve(s);
				}, function error(e) {
					reject('error: ' + e);
				});
				
			}

		});

	};

	/*
	*
	*/
	function del() {};

  	//add 
    return FB;	
}