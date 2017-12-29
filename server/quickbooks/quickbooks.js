/*
*	QUICKBOOKS
*
*	This module serves as the connection between CNE and Quickboosk.com.
*/

//define dependencies
var fetch 			= require('node-fetch');
var QuickBooks 		= require('node-quickbooks');

//define global variables
var authCode 		= process.env.SLING_AUTH_CODE;
/*var baseURL 		= 'https://api.sling.is/';
var headers 		= {
	'headers': {
		'Accept': 'application/json',
		'Authorization': authCode
	}
};*/

//define module
var quickbooks = {
	aTest: aTest
};

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
module.exports = quickbooks;

