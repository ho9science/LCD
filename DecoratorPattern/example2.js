function MacBook(){

	this.cost = function() { return 997 };
	this.screenSize = function () { return 11.6; };
}

function memory (macbook){

	var v = macbook.cost();
	macbook.cost = function(){
		return v+75;
	};
}

function engraving( macbook ){

	var v = macbook.cost();
	macbook.cost = function(){
		return v + 200;
	};
}

function insurance ( macbook ){

	var v = macbook.cost();
	macbook.cost = function(){
		return v+250;
	};
}

var mb = new MacBook();
memory( mb );
engraving( mb );
insurance( mb );

console.log( mb.cost() );

console.log( mb.screenSize() );