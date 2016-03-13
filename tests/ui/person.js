var expect = chai.expect;

describe('it should create a new person instance', function(){
	var benny = new person('Benny');

	beforeEach(function(){
		console.log('before each');
		var x = 'High like me';
		benny.gf = "Ellie";
		benny.planet = 'mars';
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
	it('shoud have a a planet called earth!', function(){
		expect(benny.planet).to.equal('mars');
	});
});

 // * Lessons
 // * variable scope doesn't change //put needed ones inside top level of your describe
 // * beforeEach and afterEach before/after //use them to set up preconditions and cleanup
 // * sinon
 // * done() for async calls, mocha will wait for it before going to next test
 // * overwrite via prototypes ( can also be useful to end a test if calls trickle//stack growns large )
 // * root level hooks in mocha
 // * pending tests for when a case should eventually be written
 // * remember where you see anon functions, that could also be a variable that is a function
 // * remember lessons from the beforeEach and describe body with the mars/earth example
 // * 
 // *jQuery Lessons with stopclock
 // *Keep logic as flat as possile ( so important )
 // *Use events as a router/controller to each flat function
 // *Don't make yourself crazy with the fragile nature of HTML, force a structure.
