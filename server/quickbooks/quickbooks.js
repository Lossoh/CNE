/*
*	QUICKBOOKS
*
*	This module serves as the connection between CNE and Quickboosk.com.
*/

//define dependencies
var fetch 				= require('node-fetch');
var QuickBooks 			= require('node-quickbooks');

//define global variables
var consumerKey 		= process.env.SLING_AUTH_CODE;	//The application's consumer key
var consumerSecret 		= process.env.SLING_AUTH_CODE;	//The application's consumer secret
var oauth_token 		= process.env.SLING_AUTH_CODE;	//The user's generated token
var oauth_token_secret 	= process.env.SLING_AUTH_CODE;	//The user's generated secret
var realmId 			= process.env.SLING_AUTH_CODE;	//The company ID
var qbo 				= new QuickBooks(	consumerKey,
											consumerSecret,
											oauthToken,
											oauthTokenSecret,
											realmId,
											false, // use the sandbox?
                         					true, // enable debugging?
                         					minorversion); // set minorversion)
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

