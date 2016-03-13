
var d = {
	type : 'male',
	planet : 'earth'
};

var person = function(name){
	this.name = name;
	this.planet = d.planet;
	this.type = d.type;
	console.log('person created');
};