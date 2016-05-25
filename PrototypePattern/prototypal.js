var myCar = {

	name: "Ford Escort",

	drive: function(){
		console.log( "Weee. I'm driving!");
	},

	panic: function(){
		console.log("Wait, hodw do you stop this thing?");
	}
};
//Use Object.create to instantiate a new car
var yourCar = Object.create(myCar);

console.log(yourCar.name);