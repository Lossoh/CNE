/*
*	FLAVOR MIXER
*
*	This module is designed to allow customers to mix and match
*	our delicious flavors and to pick thier sizing.
*/

angular
	.module('cne')
	.directive('cmeList', cmeList);

/* @ngInject */
function cmeList() {
	//define the directive
	var directive = {
		restrict: "AECM",
		templateUrl: 'views/directives/cmeList.directive.htm',
		replace: true,
		scope: {
			focus: "="
		},
		link: linkFunc,
		controller: cmeListController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {}

	cmeListController.$inject = ['$scope', '$log', 'firebaseService'];
	
	/* @ngInject */
	function cmeListController($scope, $log, firebaseService) {
		//define local variables
		var self = this;
		self.cmelist = firebaseService.read('array','cmeList');

		console.log(self.cmelist);
		//DEFINE VIEW MODEL FUNCTIONS
		/*
		*	Focus Track
		*	
		*	This function takes an id and shares that value outside the directive.
		*
		*	@param id
		*/
		self.focusTrack = function(id) {
			//console.log('focus on ', id);
			self.focus = id;
		};

		/*
		*	Update
		*
		*	This function updates values that are changed
		*
		*	@param index
		*	@param val
		*/
		self.update = function(index, val) {
			//console.log(self.cmelist, index, val);
			self.cmelist.$ref('cme').child(index).child('general').child('title').set(val);
			//firebaseService.update('array',)
		};
	}

	//pass it back
	return directive;
}