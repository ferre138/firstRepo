var friends = ["Charlie", "Liz", "David", "Mattias"];
console.log(friends[0]);
friends[1] + " <3 " + friends[2];
friends[4] = "Emily";

var friends[];
var friends = new Array();

var rand_collection = [49, true, "Eric", null];

var nums = [45,23,676,1];
nums.length; //4

//METHODS - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//push and pop
var colors["red", "green", "orange"];
colors.pop();
colors.push("blue");
//shift and unshift
var colors["red", "green", "orange"];
colors.unshift("infrared");
colors.shift();
//indexof
var friends["Charlie", "Liz", "David", "Mattias", "Liz"];
friends.indexof("David");
friends.indexof("Liz");
friends.indexof("Jayme");
//slice
var fruits = ['Banana', 'orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1,3); //citrus contains orange and Lemon

//EVALUATE
var numbers = [22, 67, 33, 96, 88];
console.log(numbers[numbers.length]);

var friendGroups = [
	["Harry", "Ron", "Hermione"],
	["Malfoy", "Crabbe", "Goyle"],
	["Mooney", "Wormtail", "Prongs"]
];
console.log(friendGroups[2][0]);

//ITERATION
//for loop
var colors = ["red", "orange", "yellow"];
for (var i=0; i<colors.length; i++){
	console.log(colors[i]);
}
//forEach arr.forEach(someFunction);
colors.forEach(function(color){
	console.log(color);
});
//work the same way as below
function printColor(color){
	console.log(color);
}
colors.forEach(printColor);

//EVALUATE
var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];
numbers.forEach(function(color){
	if (color%3 === 0) {
		console.log(color);
	}
});