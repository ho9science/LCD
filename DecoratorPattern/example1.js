function Vehicle( vehicleType ){

	this.vehicleType = vehicleType || "car";
	this.model = "default";
	this.license = "00000-000";
}

var testInstance = new Vehicle("car");
console.log( testInstance );
// Outputs:
// vehicle: car, model:default, license: 00000-000

var truck = new Vehicle("truck");

truck.setModel = function( modelName ){
	this.model = modelName;
};

truck.setColor = function( color ){
	this.color = color;
};

truck.setModel("CAT");
truck.setColor("blue");

console.log( truck );

// Outputs:
// vehicle:truck, model:CAT, color: blue

var secondInstance = new Vehicle("car");
console.log( secondInstance );

// Outputs:
// vehicle: car, model:default, license: 00000-000