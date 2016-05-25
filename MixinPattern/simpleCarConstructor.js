var Car = function(settings){
	this.model = settings.model || "no model provided";
	this.color = settings.color || "no colour provided";
};

var Mixin = function(){};

Mixin.prototype = {

	driveForwoard: function() {
		console.log("drive driveForwoard");
	},

	driveBackward: function(){
		console.log("driveBackward");
	},

	driveSideways: function(){
		console.log("drive sideways");
	}
};

function augment (receivingClass, givingClass){

	if( arguments[2] ){
		for( var i = 2, len = arguments.length; i< len; i++){
			receivingClass.prototype[arguments[i]]= givingClass.prototype[arguments[i]];
		}
	}else{

		for(var methodName in givingClass.prototype ){

			if( !Object.hasOwnProperty.call(receivingClass.prototype, methodName)){
				receivingClass.prototype[methodName] = givingClass.prototype[methodName];
			}
		}
	}
}

augment(Car, Mixin, "driveForward", "driveBackward");

var myCar = new Car({
	model: "Ford Escort",
	color: "blue"
});

myCar.driveForward();
myCar.driveBackward();

augment( Car, Mixin );

var mySportsCar = new Car({
	model: "Porsche",
	color: "red"
});

mySportsCar.driveSideways();

