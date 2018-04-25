//Check off todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

//Click on X to remove todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(100, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//Create new todo
$("input[type='text'").on("keypress", function(event){
	if(event.which == 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + todoText + "</li>");
	}
});

//Show or hide input field
$(".fa-plus").on("click", function(){
	$("input[type='text'").fadeToggle();
});