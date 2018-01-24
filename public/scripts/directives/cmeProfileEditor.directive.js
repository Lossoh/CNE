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
			
			if(	self.validation.frequency.validated && 
				self.validation.year.validated 		&& 
				self.validation.startDate.validated	&&
				self.validation.endDate.validated) {
				//
				console.log('everything filled in');

				//if everything is filled in, generate an itrations list
				//self.activeRecord.occurences = buildOccurancesList(self.activeRecord);

			} else {
				console.log('still missing data');
			};

		};

		/*
		*	Build Occurances List
		*
		*	@return []
		*/
		function buildOccurancesList(start, end, freq) {
			//define local variables
			console.log('buidling Occurances');
			console.log('start', start);
			console.log('end', end);
			console.log('freq', freq);
			var returnArray = [];
			var startDate = new Date(start);
			var endDate = new Date(end);
			var frequencies = {"Monthly": 1, "Weekly": 2, "Every Other Week": 3 };

			switch(frequencies[freq]) {
				case 1:
					console.log('Monthly');
					break;
				case 2:
					
					var dateCounter = new Date(start);

					console.log('Weekly', dateCounter < endDate, dateCounter, endDate);
					//first occurence is always the start
					returnArray.push({date: start});

					//if an event happens weekly, add seven days until the end date has been reached
					while(dateCounter < endDate) {
						console.log(dateCounter);
						dateCounter.setDate(dateCounter.getDate() + 7);

						returnArray.push({date: new Date(dateCounter)});
					};
					return returnArray;

					break;
				case 3:
					console.log('Every Other Week');
					break;
				default:
					console.log('other');
					break;
			}
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

		self.buildOccurances = function() {
			console.log('buildOccurances launched ');
			self.activeRecord.occurences = buildOccurancesList(self.activeRecord.startDate, self.activeRecord.endDate, self.activeRecord.frequency);
		};
	}

	//pass it back
	return directive;
}