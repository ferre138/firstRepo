Array.prototype.myForEach = function(func){
	for(var i=0;i<this.length;i++){
		func(this[i]);
	}
}

var friends = ["Charlie", "Dave", "Maddy", "Caitlin"];
friends.myForEach(alert);
friends.myForEach(function(name){
	console.log("I love " + name);
});