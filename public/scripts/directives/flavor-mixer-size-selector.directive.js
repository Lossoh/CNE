/*
*	FLAVOR MIXER
*
*	This module is designed to allow customers to mix and match
*	our delicious flavors and to pick thier sizing.
*/

angular
	.module('cne')
	.directive('flavorMixerSizeSelector', flavorMixerSizeSelector);

/* @ngInject */
function flavorMixerSizeSelector() {
	//define the directive
	var directive = {
		restrict: "AECM",
		templateUrl: 'views/directives/flavor-mixer-size-selector.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: flavorMixerSizeSelectorController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {}

	flavorMixerSizeSelectorController.$inject = ['$scope', '$log'];
	/* @ngInject */
	function flavorMixerSizeSelectorController($scope, $log) {
		//define local variables
		var self = this;
	}

	//pass it back
	return directive;
}