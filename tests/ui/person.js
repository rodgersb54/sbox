var expect = chai.expect;

describe('it should create a new person instance', function(){
	var benny = new person('Benny');

	beforeEach(function(){
		benny.gf = "Ellie";
	});

	afterEach(function(){

	});

	it('shoud be an object with the name of Benny', function(){
		expect(benny).to.be.an('object');
	});
	it('shoud have a name property', function(){
		expect(benny.name).to.equal('Benny');
	});
	it('shoud have a gf property', function(){
		expect(benny.gf).to.equal('Ellie');
	});
});