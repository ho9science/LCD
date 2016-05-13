function ObserverList(){
	this.ObserverList = [];
}

ObserverList.prototype.add = function( obj ){
	return this.ObserverList.push( obj );
};

ObserverList.prototype.count = function(){
	return this.ObserverList.length;
};

ObserverList.prototype.get = function( index ){
	if( index > -1 && index < this.ObserverList.length ){
		return this.ObserverList[ index ];
	}
};

ObserverList.prototype.indexOf = function( obj, startIndex ){
	var i = startIndex;

	while( i < this.observerList.length ){
		if( this.observerList[i] ===  obj){
			return i;
		}
		i++;
	}
	return -1;
};

ObserverList.prototype.removeAt = function( index ){
	this.observerList.splice( index, 1 );
};

//add, remove
function Subject(){
	this.observers = new ObserverList();
}

Subject.prototype.addObserver = function( observer ){
	this.observers.add( observer );
};

Subject.prototype.removeObserver = function( observer ){
	this.observers.removeAt( this.observers.indexOf( observer, 0 ));
};

Subject.prototype.notify = function( context ){
	var observerCount = this.observers.count();
	for(var i=0; i<observerCount; i++){
		this.observers.get(i).update( context );
	}
};

function Observer(){
	this.update = function(){
		
	}

}