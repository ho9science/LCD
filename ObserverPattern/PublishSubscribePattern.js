var mailCounter = 0;

var subscriber1 = subscribe( "inbox/newMessage ", function(topic, data){
	console.log( "A new message wa received: ", topic );

	$(".messageSender").html( data.sender );
	$(".messagePreview").html( data.body );

});

var subscriber2 = subscribe( "inbox/newMessage", function( topic, data){
	$('.newMessageCounter').html( ++mailCounter );
});

publish( "inbox/newMessage", [{
	sender: "hello@google.com",
	body: "hey there! how are you doing today"
}]);

//Publish
$(el).trigger( "/login", [{username:"test", userData:"test"}] );

//Subscribe
$(el).on("/login", function(event){});

//unsubscribe
$(el).off("/login");