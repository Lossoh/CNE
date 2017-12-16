/*
*	CNE SERVER APPLICATION
*
*	This script is the server for CNE.
*/

//declare all dependencies
var express		= require('express');

//return the express object
var serverApp = express();

//environment variables
var port = process.env.PORT || 3000;

//open the port for local development
serverApp.listen(port,function() {
	console.log('Express server is up and running on port ' + port);
});