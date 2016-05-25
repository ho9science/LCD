var addMyEvent = function(el, ev, fn){

	if(el.addEventListener ){
		el.addEventListener(ev, fn, false);
	}else if(el.attachEvent){
		el.attachEvent("on"+ ev, fn);
	} else{
		el["on"+ev]= fn;
	}
};

bindReady: function(){
	if(document.addEventListener){

		document.addEventListener("DomContetnLoaded", DOMContentLoaded, false);

		window.addEventListener("load",jQuery.ready, false);
	}else if( document.attachEvent ){
		document.attachEvent("onreadystatechange", DOMContentLoaded);

		window.attachEvent("onload",jQuery.ready);
	}
}