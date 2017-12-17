/*
*	CLI
*
*	This is the CNE CLI.
*/

//declare dependcies
var square		= require('./squareup/square');

square.locations()
.then(function success(s) {
	console.log('got this back');
}).catch(function error(e) {

});