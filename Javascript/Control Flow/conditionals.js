//if else 
//Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));
if(age<0){
	alert("error!");
}
if(age===21){
	console.log("Happy 21st birthday!");
}
if(age%2!==0){
	console.log("Your age is odd!");
}
if(age%Math.sqrt(age)===0){
	console.log("Perfect square!");
}

//While loops
var str = "hello";
var count = 0;

while(count<str.length){
	console.log(str[count]);
	count++;
}

//For loops
//for(init; condition; step){}
for(var count=1;count<6;count++){
	console.log("count is: " + count);
}
var count=1;
while(count<6){
	console.log("count is: " + count);
	count++;
}