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
	_extractLink: _extractLink,
	bizAndLoc: bizAndLoc,
	employees: employees,
	roles: roles,
	timecards: timecards,
	cashDrawerShifts: cashDrawerShifts,
	listPayments: listPayments,
	retrievePayments: retrievePayments,
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
	chargeTransactions: chargeTransactions,
	listTransactions: listTransactions,
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

function _extractLink(aLink) {
	//define local variables
	var self = this;

	//console.log('aLink', aLink);
	var halfPortions = aLink[0].split(";");
	//console.log('halfPortions', halfPortions);
	var frontSplit = halfPortions[0].split(">");
	//console.log('frontSplit', frontSplit);
	var rearSplit = frontSplit[0].split("<");
	//console.log('rearSplit', rearSplit);
	var url = rearSplit[1];

	//console.log('got this url', url);

	return url;
};

function bizAndLoc() {};
function employees() {};
function roles() {};
function timecards() {};
function cashDrawerShifts() {};

/*
*	LIST PAYMENTS
*	
*	This function returns payment details on payments/transactions taken.
*
*	@params locationId (string)
*	@params timeframe (string)
*	@return {allTransactions}
*/
function listPayments(locationId, timeframe, aLink) {
	//define local variables
	var self = this;
	var thisUrl = baseURL + 'v1/' + locationId + '/payments?' + timeframe;
	var options = {
		method: 'GET',
		headers: headers
	};

	//console.log('got this link', aLink);

	//use link 
	if(aLink != undefined) {
		thisUrl = self._extractLink(aLink);
	}

	//return for async work
	return new Promise(function(resolve, reject) {
		//fetch the details
		fetch(thisUrl, options)
		.then(function success(s) {
			
			//upon success proceed
			if(s.status == 200) {
			
				//retrieve buffer content
				self._extractBuffer(s)
				.then(function success(txsArray) {

					//check for pagination
					if(s.headers._headers.link != undefined) {

						//notify of the curret location
						//console.log('paging down now');

						//run more async work
						self.listPayments(locationId, timeframe, s.headers._headers.link)
						.then(function success(newTxsArray) {

							//console.log('got these', newTxsArray.length);

							//combine the arrays, by iterating through
							newTxsArray.forEach(function(tx) {

								//push the new tx onto the returnable array
								txsArray.push(tx);

							});

							//
							//console.log('passing values back', txsArray.length);

							//then send the values back
							resolve(txsArray);

						}).catch(function error(e) {

						});	

					} else {

						//let us know that we hit the bottom
						//console.log('got to the bottom', txsArray.length);

						//pass the array of transactions back up
						//resolve(txsArray);
						resolve(txsArray);

					}

				}).catch(function error(ee) {

				});

			} else {
				
				reject(s);
			}

			//resolve(s);
		}).catch(function error(e) {

		});
	});

};

function retrievePayments() {};
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
function chargeTransactions(locationId) {};

/*
*	LIST TRANSACTIONS
*
*	This function returns payment summary on payments/transactions taken.
*
*	@params locationId (string)
*	@params timeframe (string)
*	@return {allTransactions}
*/
function listTransactions(locationId, timeframe, aCursor) {
	//define local variables
	var self = this;
	var thisUrl = baseURL + 'v2/locations/' + locationId + '/transactions?' + timeframe;
	var options = {
		method: 'GET',
		headers: headers
	};

	//check for cursor variables
	if(aCursor != undefined) thisUrl += '&cursor=' + aCursor;

	//return for async work
	return new Promise(function(resolve, reject) {

		//fetch the details
		fetch(thisUrl, options)
		.then(function success(s) {

			//console.log('status headers:', s.headers._headers);

			//upon success proceed
			if(s.status == 200) {
				
				//retrieve buffer content
				self._extractBuffer(s)
				.then(function success(ss) {
					
					//define local variable
					var txsArray = ss.transactions;

					//check for a cursor
					if(ss.cursor != undefined) {

						//notify of the curret location
						//console.log('paging down ');
						
						//run more async work
						self.listTransactions(locationId, timeframe, ss.cursor)
						.then(function success(newTxsArray) {

							//combine the arrays, by iterating through
							newTxsArray.forEach(function(tx) {

								//push the new tx onto the returnable array
								txsArray.push(tx);

							});

							//
							//console.log('passing values back', txsArray.length);

							//then send the values back
							resolve(txsArray);
						
						}).catch(function error(e) {

						});	

					} else {

						//let us know that we hit the bottom
						//console.log('got to the bottom', ss.transactions.length);

						//pass the array of transactions back up
						resolve(txsArray);

					}

				}).catch(function error(ee) {

				});

			} else {
				
				reject(s);
			}

		}).catch(function error(e) {

		});

	});

};

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
			
			//upon success proceed
			if(s.status == 200) {
				
				//retrieve buffer content
				self._extractBuffer(s)
				.then(function success(ss) {
					
					//send the data back
					resolve(ss);

				}).catch(function error(ee) {

				});

			} else {
				reject(s);
			}

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