/*
*	FLAVOR MIXER
*
*	This module is designed to allow customers to mix and match
*	our delicious flavors and to pick thier sizing.
*/

angular
	.module('cne')
	.directive('flavorMixer', flavorMixer);

/* @ngInject */
function flavorMixer() {
	//define the directive
	var directive = {
		restrict: "AECM",
		templateUrl: 'views/directives/falvor-mixer.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: flavorMixerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {}

	flavorMixerController.$inject = ['$scope', '$log'];
	/* @ngInject */
	function flavorMixerController($scope, $log) {
		//define local variables
		var self = this;
	}

	//pass it back
	return directive;
}