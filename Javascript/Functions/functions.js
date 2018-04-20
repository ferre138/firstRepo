//FUNCTIONS

//declare
function doSomething() {
	console.log("HELLO WORLD");
}

//call it
doSomething();

//square of a number
function square(num){
	console.log(num*num);
}
//hello name
function sayHello(name){
	console.log("Hello there " + name);
}

//EXAMPLES - EXERCISES
//calculate area args - width and height

//greet three people taking 3 args name1, name2, name3, in separate console.logs

//check credentials username and password, if right print a message that user is logged in


//RETURN KEYWORD
function square(num){
	return num*num;
}
var age = 12;
var squared = square(age)

//capitalize first letter
function capitalize(str){
	if(typeof str === "number"){
		return "That's not a string!"
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("paris"));

var sayHello = function(name){
	console.log("Hello there " + name);
}

//EVALUATE
function test1(x,y){
	return y - x;
}
test1(10, 40);

function test2(x){
	return x*2;
	console.log(x);
	return x/2;
}
test2(40);

//SCOPE EXERCISE
var num = 8;
function doMath(){
	num+=1;
	if(num%5 == 0){
		return true;
	}
	else{
		return false
	}
}
num+=1;
doMath();

//SETINTERVAL
setInterval(anotherFunc, interval ms);

function sing(){
	console.log("twinkle twinkle...");
	console.log("how i wonder...");
}
setInterval(sing, 1000);

setInterval(function(){
	console.log("I am an anonymous function!");
	console.log("THIS IS AWESOME!");
}, 2000);

