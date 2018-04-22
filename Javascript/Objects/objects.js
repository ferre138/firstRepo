var person ={
	name: "Travis",
	age: 21,
	city: "LA"
};

person["name"];
person.name;

//MovieDB
var movies = [
	{
		title: "In Bruges",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Frozen",
		rating: 4.0,
		hasWatched: true
	},
	{
		title: "Max Fury Road",
		rating: 5,
		hasWatched: false
	},
	{
		title: "Hateful Eight",
		rating: 4.5,
		hasWatched: true
	}
];

movies.push({
	title: "Test movie",
	rating: "0",
	hasWatched: false
});

if(movies.length===5){
	console.log("Movie added");
}

movies.forEach(function(movie){
	var hasNotSeen = "not ";
	if (movie.hasWatched){
		hasNotSeen = "";
	}
	console.log("You have " + hasNotSeen + "seen " + "\"" + movie.title + "\" - " + movie.rating + " stars");
})

//METHODS
var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["bob", "tina"];
	add: function(x,y){
		return x+y;
	}
}

var dogSpace = {};
dogSpace.speak = function(){
	return "WOOF!";
}

dogSpace.speak();

