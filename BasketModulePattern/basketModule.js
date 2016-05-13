var basketModule = (function (){
	var basket = [];

	function doSomethingPrivate(){

	}

	function doSomethingElsePrivate(){

	}

	return {
		addItem: function ( values ){
			basket.push(values);
		},

		getItemCount: function (){
			return basket.length;
		},

		doSomething: doSomethingPrivate,

		getTotal: function(){
			var q = this.getItemCount();
			p= 0;

			while(q--){
				p += basket[q].price;
			}
			return p;
		}

	};
})();

//basketModule returns an object wiht a public API we can use
basketModule.addItem({
	item: "bread",
	price: 0.5
});

basketModule.addItem({
	item: "butter",
	price: 0.3
});

console.log( basketModule.getItemCount() );

console.log( basketModule.getTotal() );

//undefined
console.log( basketModule.basket );
//not work
console.log( baket );


// Import mixins
var myModule = (function (jQ, _ ){
	function privateMethod1(){
		jQ(".container").html("test");
	}
	function privateMethod2(){
		console.log(_.min([10,5,100,2,1000]));
	}
	return {
		publicMethod: function(){
			privateMEthod1();
		}
	};
})( jQuery, _ );

myModule.publicMethod();

// Exports

var myModule = (function (){
	var module = {},
	privateVariable = "Hello World";

	function privateMethod(){
	
	}

	module.publicProperty = "Foobar";
	module.publicMethod = function () {
		console.log( privateVariable );
	};

	return module;
})();