/*
*	CNE SERVER APPLICATION
*
*	This script is the server for CNE.
*/

//declare all dependencies
var express		= require('express');
var bodyParser 	= require('body-parser');
var favicon 	= require('serve-favicon');				//COME BACK TO THIS TO ADD

//return the express object
var serverApp = express();

//environment variables
var port = process.env.PORT || 3000;

//get the URL encoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();



/*
*	USE Declarations
*
*/
//define our body parsers
serverApp.use(jsonParser); // for parsing application/json
serverApp.use(urlencodedParser); // for parsing application/x-www-form-urlencoded



/*
*	GET Declarations
*/
serverApp.get('/', function(req, res) {

	//send back a status
	res.sendStatus(200);
});

/*
*	POST Declarations
*/

/*
*	Opening Up the server
*/
//open the port for local development
serverApp.listen(port,function() {
	console.log('Express server is up and running on port ' + port);
});