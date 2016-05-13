var MenuItem = MyFrameworkView.extend({

	events: {
		"click .thatThing": "clickedIt"
	},

	clickedIt: function(e){
		e.preventDefault();

		MyFramework.trigger("menu:click:"+this.model.get("name"));
	}
});

var MyWorkflow = function(){
	MyFramework.on("menu:click:foo", this.doStuff, this);
};

MyWorkflow.prototype.doStuff = function(){

};