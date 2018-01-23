/*
*	FLAVOR MIXER
*
*	This module is designed to allow customers to mix and match
*	our delicious flavors and to pick thier sizing.
*/

angular
	.module('cne')
	.directive('dateBookendPicker', dateBookendPicker);

/* @ngInject */
function dateBookendPicker() {
	//define the directive
	var directive = {
		restrict: "AECM",
		templateUrl: 'views/directives/dateBookendPicker.directive.htm',
		replace: true,
		scope: {
			year: "=",
			bookend: "=",
			bkndtype: "=",
			validatefn: "&"
		},
		link: linkFunc,
		controller: dateBookendPickerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {}

	dateBookendPickerController.$inject = ['$scope', '$log'];
	/* @ngInject */
	function dateBookendPickerController($scope, $log) {
		//define local variables
		var self = this;
		self.monthdays = [
			{text: "January", 	value: 1, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]},
			{text: "February", 	value: 2, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]},
			{text: "March", 	value: 3, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]},
			{text: "April", 	value: 4, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]},
			{text: "May", 		value: 5, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]},
			{text: "June", 		value: 6, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]},
			{text: "July", 		value: 7, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]},
			{text: "August", 	value: 8, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]},
			{text: "September", value: 9, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]},
			{text: "October", 	value: 10, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]},
			{text: "November", 	value: 11, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]},
			{text: "December", 	value: 12, 	days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}
		];
		
		self.activedate = {month: "", day: "", wkday: "" };
		self.validations = {
			month: "",
			day: ""
		}

		//define private functions
		/*
		*	Weekday Calculation
		*/
		function weekdayCalculation() {
			//define local variables
			var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",  "Saturday"];
			var currentDate = new Date(self.year, self.activedate.month - 1, self.activedate.day);
			var wkdayNum = currentDate.getDay();
			self.activedate.wkday = daysOfWeek[wkdayNum];
		};

		/*
		*	Save Bookend
		*/
		function saveBookend() {
			//define local variables
			var currentDate = new Date(self.year, self.activedate.month - 1, self.activedate.day);
			console.log('saving the bookend', self.bkndtype);

			self.bookend = currentDate;

			self.validatefn({type: self.bkndtype, value:self.bookend});
		};

		//define view model functions
		self.validate = function(type, value) {
			//define local variables
			var isTextMonth = false;

			//must be a number
			//console.log('found:', parseInt(value), isNaN(parseInt(value)));

			//determine if it's a string or a number
			if(isNaN(parseInt(value))) {
				//can the string be turned into a number
				//console.log('checking all month days');
				//iterate through all the text months, if a match is foudn through the flag
				self.monthdays.forEach(function(month) {
					if(month.text == value) {
						//console.log('found the text month')
						//throw the flag
						isTextMonth = true;
						//change the date
						self.activedate.month = month.value;
					} 
				});

				if(!isTextMonth) {
					//console.log('no text month found');
					self.activedate.month = '';
				}
				
			} else {
				//save the Int version of the number
				self.activedate[type] = parseInt(value);
			}
			

			//must be within the required range
			//ADD THIS LATER

			if(self.year != "" && self.activedate.month != "" && self.activedate.day  != "") {
				weekdayCalculation();
				saveBookend();
			} else {
				console.log('still missing data');
			}

			
		};

	}

	//pass it back
	return directive;
}