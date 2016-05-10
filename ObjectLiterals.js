var myModule = {
	myProperty: "someValue",

	myConfig: {
		useCashing: true,
		language: "en"
	},

	saySomething: function(){
		console.log("Where in the world is Paul Irish today?");
	},

	reportMyConfig: function(){
		console.log( "Cashing is:" + (this.myConfig.useCashing ? "enabled":"disabled"));
	},

	updateMyConfig: function( newConfig ){
		if( typeof newConfig === "object" ){
			this.myConfig = newConfig;
			console.log(this.myConfig.language );
		}
	}
};

myModule.saySomething();

myModule.reportMyConfig();

myModule.updateMyConfig({
	language: "fr",
	useCashing: false
});

myModule.reportMyConfig();