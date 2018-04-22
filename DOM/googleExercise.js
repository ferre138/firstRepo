var logo = document.getElementById("hplogo");
logo.setAttribute("srcset", "https://purepng.com/public/uploads/large/51502305652ykjjrpkix5ibhekbh61vyogizh6sq5fop8tmgjzbx6i323glfsl2q550xj5ylqe68a8g06k1loratqtbzabj7mxvw1xwjjwpdus8.png");
logo.style.width = 200px;
logo.style.height = 100px;

var links = document.querySelectorAll("a");
for(var i=0;i<links.length;i++){
	links[i].style.background = "pink";
	links[i].style.color = "red";
	links[i].style.border = "1px dashed red";
	console.log(links[i].getAttribute("href"));
	links[i].setAttribute("href", "http://www.bing.com");
}