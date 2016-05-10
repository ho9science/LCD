//Each of the following options will create a new empty object:

var newObject = {};

var newObject = Object.create(Object.prototype);

var newObject = new Object();

//1. Dot syntax

newObject.someKey = "Hello World";

var value = newObject.someKey;

//2. Squeare bracket syntax

newObject["someKey"] = "Hello World";

var value = newObject["someKey"];

//3.Object.defineProperty

var defineProp = function (obj, key, value ){
	var config = {
		value: value,
		writable: true,
		enumerable: true,
		configurable: true
	};
	Object.defineProperty(obj, key, config);
};

var person = Object.create( Object.prototype );

defineProp( person, "car", "SM5");
defineProp( person, "dateOfBirth", "1989");

console.log(person);
//Object {car: "SM5", dateOfBirth:"1989"}

//4. Object.defineProperties

Object.defineProperties( newObject, {
	"someKey":{
		value: "Hello World",
		writable: treu
	},
	"anotherKey":{
		value: "Foo bar",
		wirtable: false
	}
});
