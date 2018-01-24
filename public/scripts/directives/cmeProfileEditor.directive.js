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

	cmeProfileEditorController.$inject = ['$scope', '$log', 'firebaseService'];
	
	/* @ngInject */
	function cmeProfileEditorController($scope, $log, firebaseService) {
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
				//console.log(e);
			});
		};
	}

	//pass it back
	return directive;
}