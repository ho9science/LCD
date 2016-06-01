//single element
$('#singleItem').addClass("active");
$('#container').addClass("active");

//Collection of elements
$('div').addClass("active");
$('.item').addClass("active");
$('input').addClass("active");

addClass: function( value ){
	var classNames, i, l, elem, setClass, c, cl;

	if( jQuery.isFunction( value )){
		return this.each(function(j){
			jQuery(this).addClass( value.call(this, j, this.className ));
		});
	}

	if( value && typeof value === "string" ){
		classNames = value.split( rspace );

		for( i=0, l = this.length; i < l; i++){
			elem = this[i];

			if( elem.nodeType === 1){
				if( !elem.className && classNames.length === 1){
					elem.className = value;
				}else{

					setClass = " " + elem.className + " ";

					for( c = 0, cl = classNames.length; c < cl; c++ ){
						if( !~setClass.indexOf( " " + classNames[c] = " ")){
							setClass += classNames[ c ] +" ";
						}
					}
					elem.className = jQuery.trim( setClass );
				}
			}
		}
	}

	return this;
}