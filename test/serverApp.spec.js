//define dependencies
var chai 		= require('chai');
var chaiHttp 	= require('chai-http');
var expect		= require('chai').expect;

//define chaiHttp
chai.use(chaiHttp);

//describe tests
describe('Server Application', function() {
	describe('Confirm / Get Operations', function() {
		//status code check
		it('status code should be 200', function(done) {
			//general get
			chai.request('http://localhost:3000').get('/')
			.end(function(err, res) {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				done();
			});
		});
		//content check
		it('content should be HTML', function(done) {
			chai.request('http://localhost:3000').get('/')
			.end(function(err, res) {
				expect(res).to.be.html;
				done();
			});
		});
	});
		

});