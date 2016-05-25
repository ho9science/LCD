var abstractVehicleFactory = (function (){

	var types = {};

	return {
		getVehicle: function( type, customizations ){
			var Vehicle = types[type];

			return (Vehicle ? new Vehicle(customizations): null);
		},

		registerVehicle: function( type, Vehicle){
			var proto = Vehicle.prototype;

			if( proto.drive && proto.breakDown){
				types[type]=Vehicle;
			}

			return abstractVehicleFactory;
		}
	}
})();