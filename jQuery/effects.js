$('#fadeBtn').on("click", function(){
	$(".fadeout").fadeOut(1000, function(){
		console.log("Faded Out");
		$(this).remove();
	});
	$(".fadein").fadeIn(1000, function(){
		console.log("Faded In");
	});
	$(".fadetoggle").fadeToggle(1000, function(){
		console.log("faded in and out");
	});
});

//fadeToggle()
$('#slideBtn').on("click", function(){
	$(".slideout").slideUp(function(){
		console.log("Slided Out");
	});
	$(".slidein").slideDown(function(){
		console.log("Slided In");
	});
	$(".slidetoggle").slideToggle(function(){
		console.log("Slided in and out");
	});
});
