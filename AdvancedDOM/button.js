var button = document.querySelector("button");
var paragraph = document.querySelector("p");
// button.addEventListener("click", function(){
// 	paragraph.textContent = "Someone clicked the button!";
// });
document.querySelector("p").addEventListener("click", function(){
	alert("YOU CLICKED THE PARAGRAPH");
})

var lis = document.querySelectorAll("li");

for(var i=0;i<lis.length;i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
	});
}

button.addEventListener("click", changeText);

function changeText(){
	paragraph.textContent = "Someone clicked the button!";
}