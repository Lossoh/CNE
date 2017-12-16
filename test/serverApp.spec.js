//define dependencies
var chai 		= require('chai');
var chaiHttp 	= require('chai-http');
var expect		= require('chai').expect;

//define chaiHttp
chai.use(chaiHttp);

//describe tests
describe('Server Application', function() {

	it('should return status code 200 on / GET', function(done) {
		
		chai.request('http://localhost:3000').get('/')
		.end(function(err, res) {
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			done();
		});

	});	

});