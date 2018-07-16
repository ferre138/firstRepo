console.dir();
document.URL;
document.link;
document.html;
document.body;

//MAIN METHODS
document.getElementById();
document.getElementByClassName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();

//STYLE MANIPULATION
var document.querySelector("h1");
h1.style.color = "yellow";
h1.style.border = "5px solid pink";
h1.style.fontSize = "12px";
h1.style.background = "grey";
h1.style.marginTop = "70px";
//Apply style to element using css
/*Define a class in CSS*/
.some-class{
	color: blue;
	border: 10px solid red;
}
/*Manipulate new class to the selected element*/
var tag = document.getElementById("highlight");
tag.classList.add("some-class");
tag.classList.remove("some-class");
tag.classList.toggle("some-class");

//TEXT AND CONTENT MANIPULATION
tag.textContent;
tag.textContent = "Hellow there!";
var tag = document.querySelector("p");
tag.innerHTML; //select inner tag of element
tag.innerHTML = "Thank God it is Friday!";
document.querySelector("p").textContent = "Time to go home";
document.body.textContent = "<h1>Goodbye!</h1>";
document.body.innerHTML = "<h1>Goodbye!</h1>";

//ATTRIBUTES MANIPULATION
var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href", "www.dogs.com");