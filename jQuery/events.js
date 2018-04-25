$("button").click(function(){
	alert("button clicked!");
});

$("button").click(function(){
	$(this).css("background", "pink");
});

$("button").click(function(){
	var text = $(this).text();
	console.log("You clicked " + text);
});

$("input").keypress(function(event){
	if(event.which == 13){
		alert("You clicked Enter!");
	}
});

$("h1").on("click", function(){
	$(this).css("color", "purple");
});

$("input").on("keypress", function(){
	console.log("Key pressed!");
})

$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
})