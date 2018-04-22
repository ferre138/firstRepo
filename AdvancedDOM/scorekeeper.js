var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var resbtn = document.querySelector("#res");
var p1score = 0;
var p2score = 0;
var maxInput = document.querySelector("input");
var maxScore = Number(maxInput.value);
var maxDisplay = document.querySelector("#score");
var isWinner = false;

p1btn.addEventListener("click", function(){
	p1score = updateScore(p1score, p1display);
});

p2btn.addEventListener("click", function(){
	p2score = updateScore(p2score, p2display);
});

res.addEventListener("click", reset);

maxInput.addEventListener("change", function(){
	maxDisplay.textContent = this.value;
	maxScore = Number(this.value);
	reset();
})

function reset(){
	p1score = 0;
	p1display.textContent = 0;
	p1display.classList.remove("winner");
	p2score = 0;
	p2display.textContent = 0;
	p2display.classList.remove("winner");
	isWinner = false;
}

function updateScore(score, display){
	if(!isWinner){
		score++;
		if(score === maxScore){
			display.classList.add("winner");
			isWinner = true;
		}
		display.textContent = score;
	}
	return score;
}