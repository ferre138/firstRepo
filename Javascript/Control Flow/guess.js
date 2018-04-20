//Create secret number
var secret = 4;
//Ask user for guess
do{
var guess = Number(prompt("Guess a number:"));
	//Check guess
	if(Number(guess)===secret){
		alert("You guessed it right!");
	}
	else if(Number(guess)>secret){
		alert("Too high, guess again!");
	}
	else{
		alert("Too low, guess again!");
	}	
}while(Number(guess)!==secret);
