/*	
*	SETUP
*
*	This module is used to setup schema for the calendar module
*/

var fs = require('fs');

var setup = {
	build: build
};

function build() {
	//define local variables
	var self = this;
	var year = 2018;
	var calObj = {
		"2017": {},
		"2018": {},
		"2019": {}
	};

	//iterate through years
	for(var year = 2017; year <= 2019; year++) {

		//itrate through all months
		for(var mo = 1; mo <= 12; mo++) {

			//iterate through all days
			for(var day = 1; day <= 31; day++) {
				
				var datestring = year + "_" + mo + "_" + day;
				
				calObj[year][datestring] = {};
			};

		};

	};
	
	console.log(calObj);

	fs.writeFile("cal_model.json", JSON.stringify(calObj, null, '\t'), 'utf8', function (err) {
		    if (err) {
		        return console.log(err);
		    }

		    console.log("The file was saved!");
		});

};

//return the module
module.exports = setup;

