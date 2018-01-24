/*
*	FLAVOR MIXER
*
*	This module is designed to allow customers to mix and match
*	our delicious flavors and to pick thier sizing.
*/

angular
	.module('cne')
	.directive('cmeEngagmentsManager', cmeEngagmentsManager);

/* @ngInject */
function cmeEngagmentsManager() {
	//define the directive
	var directive = {
		restrict: "AECM",
		templateUrl: 'views/directives/cmeEngagmentsManager.directive.htm',
		replace: true,
		scope: {
			cmeEngagObj: "=",
			addSingle: "&"
		},
		link: linkFunc,
		controller: cmeEngagmentsManagerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {}

	cmeEngagmentsManagerController.$inject = ['$scope', '$log', 'firebaseService', 'schemaFactory'];
	/* @ngInject */
	function cmeEngagmentsManagerController($scope, $log, firebaseService, schemaFactory) {
		//define local variables
		var self = this;
		self.engagmentsCollection = firebaseService.read('object','engagmentsCollection');
		self.engagmentsList = firebaseService.read('array','engagmentsList');

		//define private functions
		function saveEngagmentToCME(key) {
			self.addSingle({key: key});
		};

		function createNewEngagement() {
			
			return new Promise(function(resolve, reject) {

				firebaseService.create("array", 'engagmentsList', schemaFactory.newEngagment()).then(function success(s) {
					resolve(s);
				}).catch(function error(e) {
					reject(e);
				});
			});

		};	

		//define view model functions
		self.singleAdd = function() { 
			//notify user
			console.log('adding single'); 

			//create new engagment
			createNewEngagement().then(function success(s) {

				//extract the key from the response
				var engagmentKey = s.path.n[s.path.n.length - 1];
				
				//add engagment to CME
				saveEngagmentToCME(engagmentKey);

			}).catch(function error(e) {
				console.log('error', e);
			});
			

		};
		
		self.batchAdd = function() { console.log('adding batch'); };

		self.update = function() {
			//console.log(self.cmelist, index, val);
			firebaseService.update('object', 'engagmentsCollection').then(function success(s) {
				console.log('success', s);
			}).catch(function error(e) {
				console.log(e);
			});
		};
	}

	//pass it back
	return directive;
}