/*
*	CLI
*
*	This is the CNE CLI.
*/

//declare dependcies
//var square		= require('./squareup/square');
//var firebase		= require('./firebase/firebase');
//var sling			= require('./sling/sling');
var qbooks			= require('./quickbooks/quickbooks');

/*sling.timesheets('2017-10-22T01:00:00Z/2017-10-22T23:00:00Z')
.then(function success(s) {
	console.log('got this back:', s);
}).catch(function error(e) {
	console.log('error:', e);
});*/

qbooks.aTest()
.then(function success(s) {
	console.log('got this back:', s);
}).catch(function error(e) {
	console.log('error:', e);
});