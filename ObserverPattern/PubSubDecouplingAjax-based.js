;(function( $ ){
	var resultTemplate = _.template($("#resultTemplate").html());

	$.subscribe( "/search/tags", function(e, tags){
		$("#lastQuery").html("<p>Searched for:<strong>"+tags+"</strong></p>");
	});

	$.subscribe( "/search/resultSet", function( e, results ){
		$("#searchResults").empty().append(resultTemplate( results ));
	});

	$("#flickrSearch").submit(function(e){

		e.preventDefault();
		var tags = $(this).find("#query").val();

		if(!tags){
			return;
		}

		$.publish( "/search/tags", [ $.trim(tags) ]);
	});

	$.subscribe("/search/tags", function( e. tags){

		$.getJSON("",{
			tags: tags,
			tagmode: "any",
			format: "json"
		},

		function(data){
			if( !data.items.length ){
				return;
			}

			$.publish( "/search/resultSet", {items:data.items });
		});
	});
})( jQuery );