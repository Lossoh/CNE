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
			record: '='
		},
		link: linkFunc,
		controller: cmeProfileEditorController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {}

	cmeProfileEditorController.$inject = ['$scope', '$log'];
	/* @ngInject */
	function cmeProfileEditorController($scope, $log) {
		//define local variables
		var self = this;
		self.activeDate = {
			year: "",
			month: "",
			day:""
		}
	}

	//pass it back
	return directive;
}