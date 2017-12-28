/*
*	CLI
*
*	This is the CNE CLI.
*/

//declare dependcies
var square		= require('./squareup/square');

square.listTransactions('14E8S7P16JQDM', 'begin_time=2017-06-01T00:00:00Z&end_time=2017-06-15T00:00:00Z')
.then(function success(s) {
	console.log('returned:', s.length);
	//console.log('status code:', s.status);
	//console.log('status message:', s.statusText);
	//console.log('status', s.headers._headers);
	//console.log('status', s.status);
}).catch(function error(e) {

});

/*square.locations()
.then(function success(s) {
		console.log(s);
}).catch(function error(e) {
});*/