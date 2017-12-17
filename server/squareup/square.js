/*
*	SQUARE
*
*	This module serves as the connection between CNE and SquareUp.com.
*/

//define dependencies
var fetch = require('node-fetch');

//define module
var squareup = {
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
module.exports = squareup;