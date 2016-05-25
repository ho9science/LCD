var Person = function( firstName, lasName ){
	this.firstName = firstName;
	this.lastName = lastName;
	this.gender = "male";
};

var clark = new Person("Clark","Kent");

var Superhero = function(firstName, lastName, powers){

	Person.call(this, firstName, lastName);

	this.powers = powers;
};

Superhero.prototype = Object.create( Perosn.prototype );
var superman = new Superhero("Clark", "Kent",["fight", "heat-vision"]);
console.log(superman);