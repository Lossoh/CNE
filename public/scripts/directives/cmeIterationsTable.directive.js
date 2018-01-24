/*
*	FLAVOR MIXER
*
*	This module is designed to allow customers to mix and match
*	our delicious flavors and to pick thier sizing.
*/

angular
	.module('cne')
	.directive('cmeIterationsTable', cmeIterationsTable);

/* @ngInject */
function cmeIterationsTable() {
	//define the directive
	var directive = {
		restrict: "AECM",
		templateUrl: 'views/directives/cmeIterationsTable.directive.htm',
		replace: true,
		scope: {
			instances: "=",
			buildoccurencesfn: "&"
		},
		link: linkFunc,
		controller: cmeIterationsTableController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {}

	cmeIterationsTableController.$inject = ['$scope', '$log', 'firebaseService'];
	/* @ngInject */
	function cmeIterationsTableController($scope, $log, firebaseService) {
		//define local variables
		var self = this;
		self.engagmentsCollection = firebaseService.read('object','engagmentsCollection');
		self.autofill = true;

		//view model functions
		self.buildoccurencesbutton = function() {
			console.log('buildoccurencesbutton clicked');
			self.buildoccurencesfn();
		};

		
	}

	//pass it back
	return directive;
}