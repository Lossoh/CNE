/*
*	SQUARE
*
*	This module serves as the connection between CNE and SquareUp.com.
*/

//define dependencies
var fetch 			= require('node-fetch');

//define global variables
var accessToken 	= process.env.SQUARE_APP_TOKEN;
var sandboxToken 	= process.env.SQUARE_SANDBOX_APP_TOKEN;
var applicationID 	= process.env.SQUARE_APP_ID;
var sandboxID 		= process.env.SQUARE_SANDBOX_APP_ID;
var baseURL 		= 'https://connect.squareup.com/';
var headers 		= {
	'Authorization': 'Bearer ' + process.env.SQUARE_APP_TOKEN,
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

//set development environment variables
if(process.env.IS_PROUDCTION == 'true') {

} else {

}

//define module
var squareup = {
	_extractBuffer: _extractBuffer,
	bizAndLoc: bizAndLoc,
	employees: employees,
	roles: roles,
	timecards: timecards,
	cashDrawerShifts: cashDrawerShifts,
	payments: payments,
	settlements: settlements,
	refunds: refunds,
	orders: orders,
	items: items,
	variations: variations,
	inventory: inventory,
	modifiers: modifiers,
	categories: categories,
	discounts: discounts,
	fees: fees,
	pages: pages,
	webhooks: webhooks,
	transactions: transactions,
	locations: locations,
	customers: customers,
	checkout: checkout,
	cataglog: cataglog,
	aTest: aTest
};

// DEFINE ALL FUNCTIONS
function _extractBuffer(buffer) {
	//define local variables
	var self = this;

	//return async content
	return new Promise(function(resolve, reject) {

		//access buffer
		buffer.buffer().then(function(data) {

			//pass back the json
			resolve(JSON.parse(data.toString('utf8')));

		});

	});

};

function bizAndLoc() {};
function employees() {};
function roles() {};
function timecards() {};
function cashDrawerShifts() {};
function payments() {};
function settlements() {};
function refunds() {};
function orders() {};
function items() {};
function variations() {};
function inventory() {};
function modifiers() {};
function categories() {};
function discounts() {};
function fees() {};
function pages() {};
function webhooks() {};
function transactions() {};

/*
*	LOCATIONS
*
*	This is 
*/
function locations() {
	//define local variables
	var self = this;
	var thisUrl = baseURL + 'v2/locations';
	var options = {
		method: 'GET',
		headers: headers
	};

	//return for async work
	return new Promise(function(resolve, reject) {

		//fetch the details
		fetch(thisUrl, options)
		.then(function success(s) {
			
			//retrieve buffer content
			self._extractBuffer(s)
			.then(function success(ss) {
				
				//send the data back
				resolve(ss);

			}).catch(function error(ee) {

			});

		}).catch(function error(e) {
			console.log(e);
		});

	});

};

function customers() {};
function checkout() {};
function cataglog() {};

/*
*	ATEST
*
*	This function is just used for testing purposes
*/
function aTest() {
	return new Promise(function(resolve, reject) {
		resolve('{ "testing": "good Test"}');
	});
};

//return the module
module.exports = squareup;