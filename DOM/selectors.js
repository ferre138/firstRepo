var id = document.getElementById("highlight");
var element = document.getElementsByClassName("bolded");
var tag = document.getElementsByTagName("h1");
var tag = document.getElementsByTagName("body")[0];

//select anything by style selector - it always returns the first element
var id_query = document.querySelector("#highlight");
var element_query = document.querySelector(".bolded");
var tag_query = document.querySelector("h1");

//select anything by style selector - it returns ALL elements
var elements_query = document.querySelectorAll(".bolded");