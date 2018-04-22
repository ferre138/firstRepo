var btn = document.querySelector("button");
var toggle = false;

// btn.addEventListener("click", function(){
// 	if(toggle)
// 		document.querySelector("body").style.background = "white";
// 	else
// 		document.body.style.background = "purple";
// 	toggle = !toggle;
// });

btn.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});