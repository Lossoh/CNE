/*
*	FLAVOR MIXER
*
*	This module is designed to allow customers to mix and match
*	our delicious flavors and to pick thier sizing.
*/

angular
	.module('cne')
	.directive('cmeProfileEditor', cmeProfileEditor);

/* @ngInject */
function cmeProfileEditor() {
	//define the directive
	var directive = {
		restrict: "AECM",
		templateUrl: 'views/directives/cmeProfileEditor.directive.htm',
		replace: true,
		scope: {
			focus: '='
		},
		link: linkFunc,
		controller: cmeProfileEditorController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {

	}

	cmeProfileEditorController.$inject = ['$scope', '$log', 'firebaseService', 'schemaFactory'];
	
	/* @ngInject */
	function cmeProfileEditorController($scope, $log, firebaseService, schemaFactory) {
		//define local variables
		var self = this;

		//define view model variables
		self.cmeCollection = firebaseService.read('object','cmeObject');

		//define view model functions
		/*
		*	Update
		*
		*	This function updates values that are changed
		*
		*	@param index
		*	@param val
		*/
		self.update = function() {
			//console.log(self.cmelist, index, val);
			firebaseService.update('object', 'cmeObject').then(function success(s) {
				//console.log('success', s);
			}).catch(function error(e) {
				console.log(e);
			});
		};

		self.addEngagment = function(key) {
			//define local variables
			var eventList = self.cmeCollection[self.focus].engagements;
			
			if(eventList == "") {
				self.cmeCollection.$ref().child(self.focus).child('engagements').set({0: key}).then(function success(s) {
					//console.log('success', s);
				}).catch(function error(e) {
					console.log(e);
				});
			} else {
				var lastKey = 0;

				Object.keys(eventList).forEach(function(evntKey) {
					lastKey = parseInt(evntKey) + 1;
				});
				eventList[lastKey] = key;

				self.cmeCollection.$ref().child(self.focus).child('engagements').set(eventList).then(function success(s) {
					//console.log('success', s);
				}).catch(function error(e) {
					console.log(e);
				});
			}
			
		};

		/*
		*
		*/
		self.saveSeasonDate = function(bookend, value) {	
			var GMTtime = new Date(value).toISOString();
			var GMTSplit = GMTtime.split('Z');
			var PSTtime = GMTSplit[0] + "-08:00";

			//console.log()
			self.cmeCollection[self.focus].general.season[bookend] = PSTtime

			self.update();

			self.placeholder='';
		};
	}

	//pass it back
	return directive;
}