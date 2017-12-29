/*
*	SQUARE
*
*	This module serves as the connection between CNE and SquareUp.com.
*/

//define dependencies
var fetch 			= require('node-fetch');

//define global variables
var authCode 		= process.env.SLING_AUTH_CODE;
var baseURL 		= 'https://api.sling.is/';
var headers 		= {
	'headers': {
		'Accept': 'application/json',
		'Authorization': authCode
	}
};

//define module
var sling = {
	_extractBuffer: _extractBuffer,
	accounts: accounts,
	acks: acks,
	admin: admin,
	announcements: announcements,
	api: api,
	availability: availability,
	calendar: calendar,
	calendar_filters: calendar_filters,
	channels: channels,
	conversations: conversations,
	currencies: currencies,
	deflt: deflt,
	exprt: exprt,
	geo: geo,
	groups: groups,
	health: health,
	invoices: invoices,
	labor: labor,
	leave: leave,
	notifications: notifications,
	orgs: orgs,
	payroll: payroll,
	personas: personas,
	postmark: postmark,
	premium: premium,
	print: print,
	reports: reports,
	sales: sales,
	search: search,
	shift_notes: shift_notes,
	shifts: shifts,
	stripe: stripe,
	tasks: tasks,
	timesheets: timesheets,
	timeszones: timeszones,
	uploads: uploads,
	users: users
};

/*
*	_EXTRACT BUFFER
*
*	Pull out the 
*/
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

function accounts() {};
function acks() {};
function admin() {};
function announcements() {};
function api() {};
function availability() {};
function calendar() {};
function calendar_filters() {};
function channels() {};
function conversations() {};
function currencies() {};
function deflt() {};
function exprt() {};
function geo() {};
function groups() {};
function health() {};
function invoices() {};
function labor() {};
function leave() {};
function notifications() {};
function orgs() {};
function payroll() {};
function personas() {};
function postmark() {};
function premium() {};
function print() {};
function reports() {};
function sales() {};
function search() {};
function shift_notes() {};
function shifts() {};
function stripe() {};
function tasks() {};

/*
*	TIMESHEETS
*
*	This function is used to downlooad time cards, according to the sling API.
*	Possible Responses:
*	200 - Success
*	400 - The dates query string parameter was not supplied.
*	402 - Premium required
*	405	- Invalid permissions
*
*	@param op
*	@param dates - is an interval time, i.e. 2017-10-22T01:00:00Z/2017-10-22T23:00:00Z
*	@timesheet_id
*	@data
*	@returns Promise
*
*/
function timesheets(dates, op, timesheet_id, data) {
	//declare local variables
	var self = this;
	var url = baseURL + 'v1/timesheets?dates=' + dates;

	//return async work
	return new Promise(function(resolve, reject) {

		//fetch requred data
		fetch(url, headers)
		.then(function success(s) {
			
			//extract the buffer data
			self._extractBuffer(s)
			.then(function success(data) {

				//pass the data back
				resolve(data);

			}).catch(function error(err) {
				reject(err);
			});

		}).catch(function error(e) {
			reject(e);
		});
		
	});

};

function timeszones() {};
function uploads() {};

/*
*	USERS
*
*	This function handles everything related to users
*
*	@param op
*	@param userId
*	@param orgId
*	@param invitedUserId
*	@return {returnObject}
*/
function users(op, userId, orgId, invitedUserId) {
	//define local variables
	var self = this;
	var url = baseURL + 'v1/users';

	//pass back async work
	return new Promise(function(resolve, reject) {

		//fetch requred data
		fetch(url, headers)
		.then(function success(s) {
			
			//extract the buffer data
			self._extractBuffer(s)
			.then(function success(data) {

				//pass the data back
				resolve(data);

			}).catch(function error(err) {
				reject(err);
			});

		}).catch(function error(e) {
			reject(e);
		});

	});

};

//return the module
module.exports = sling;

