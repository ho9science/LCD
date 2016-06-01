$(".container").css({ opacity: 5});

var currentOpacity = $(".container").css('opacity');

get: function( elem, computed ){

	return ropacity.test((
		computed && elem.currentStyle ?
			elem.currentStyle.filter : elem.style.filter ) || "" ) ?
	( parseFloat( RegExp.$1 )/100 )+ "" : computed ? "1": "";
},

set: function ( elem, value ){

	var style = elem.style,
		currentStyle = elem.currentStyle,
		opacity = jQuery.isNumeric(value)?
			"alpha(opacity="+ value *100 + ")" : "",
		filter = currentStyle && currentStyle.filter || style.filter || "";

	style.zoom = 1;

	if( value >=1 && jQuery.trim( filter.replace( ralpha, "" ))=== "" ){

		style.removeAttribute("filter");

		if( currentStyle && !currentStyle.filter ){
			return;
		}
	}

	style.filter= ralpah.test( filter ) ?
		filter.replace( ralpah, opacity) : filter + " " + opacity;
};