/*
*	FLAVOR MIXER
*
*	This module is designed to allow customers to mix and match
*	our delicious flavors and to pick thier sizing.
*/

angular
	.module('cne')
	.directive('loginValidation', loginValidation);

/* @ngInject */
function loginValidation() {
	//define the directive
	var directive = {
		restrict: "AECM",
		templateUrl: 'views/directives/login-validation.directive.htm',
		replace: true,
		scope: {
			active: "="
		},
		link: linkFunc,
		controller: loginValidationController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {}

	loginValidationController.$inject = ['$scope', '$log'];
	/* @ngInject */
	function loginValidationController($scope, $log) {
		//define local variables
		var self = this;

	}

	//pass it back
	return directive;
}