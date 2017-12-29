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
		'Accept': 'application/json'
		'Authorization': authCode
	}
};

//define module
var sling = {
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
function timesheets() {};
function timeszones() {};
function uploads() {};
function users() {};

//return the module
module.exports = sling;

