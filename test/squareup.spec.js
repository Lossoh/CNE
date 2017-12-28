//define dependencies
var chai 			= require('chai');
var chaiHttp 		= require('chai-http');
var chaiAsPromised 	= require("chai-as-promised");

//define external modules
var square 		= require('../server/squareup/square.js');

//define chaiHttp
chai.use(chaiAsPromised);

var expect			= chai.expect;

//describe tests
describe('SquareUp API', function() {
	
	//all the v1 functions
	describe('v1', function() {
		describe('Business & Locations', function() {});
		describe('Employees', function() {});
		describe('Roles', function() {});
		describe('Timecards', function() {});
		describe('Cash Drawer Shifts', function() {});
		describe('Payments', function() {
			describe('List', function() {
				it('should return JSON list of transactions', function() {
					expect(2).to.equal(2);
				});
			});
		});
		describe('Settlements', function() {});
		describe('Refunds', function() {});
		describe('Orders', function() {});
		describe('Items', function() {});
		describe('Variations', function() {});
		describe('Inventory', function() {});
		describe('Modifiers', function() {});
		describe('Categories', function() {});
		describe('Discounts', function() {});
		describe('Fees', function() {});
		describe('Pages', function() {});
		describe('Webhooks', function() {});
	});
	
	//All the V2 functions
	describe('v2', function() {
		describe('Transactions', function() {
			describe('ListTransactions', function() {
				it('should return JSON list of transactions', function() {
					expect(2).to.equal(2);
				});
			});
		});

		describe('Locations', function() {
			describe('ListLocations', function() {
				it('should return JSON list of locations', function() {
					expect(2).to.equal(2);
				});
			});
		});
		describe('Customers', function() {});
		describe('Checkout', function() {});
		describe('Catalog', function() {});
	});
});