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
	function linkFunc(scope, el, attr, ctrl) {

	}

	cmeProfileEditorController.$inject = ['$scope', '$log'];
	/* @ngInject */
	function cmeProfileEditorController($scope, $log) {
		//define local variables
		var self = this;
		self.activeRecord = {
			frequency: "",
			year: "",
			startDate: "",
			endDate: "",
			occurences: []
		};
		self.validation = {
			frequency: {attempted: false, validated: false},
			year: {attempted: false, validated: false},
			startDate: {attempted: false, validated: false},
			endDate: {attempted: false, validated: false}
		};

		//define private functions
		/*
		*	Check Completness
		*/
		function checkCompletness() {
			//define local variables
			//console.log('checking completness', self.validation);
			
			if(	self.validation.frequency 	&& 
				self.validation.year 		&& 
				self.validation.startDate	&&
				self.validation.endDate) {
				//
				console.log('everything filled in');

				//if everything is filled in, generate an itrations list
				buildOccurancesList(self.validation.startDate, self.validation.endDate, self.validation.frequency);

			} else {
				console.log('still missing data');
			};

		};

		//define viewmodel functions 
		self.validate = function(type, value) {
			//define local variables
			
			//console.log('got these values', type, value);

			self.validation[type].attempted = true;

			if(value != "") self.validation[type].validated = true;
			else self.validation[type].validated = false;

			checkCompletness();
		};

	}

	//pass it back
	return directive;
}