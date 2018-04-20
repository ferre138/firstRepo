// do{
// 	var answer = prompt("Are we there yet?");
// }while(answer !== "yes" && answer !== "yah" && answer !== "yeah");

// alert("YAY! We are finally here!");

do{
	var answer = prompt("Are we there yet?");
}while(answer.indexOf("yes") === -1  && answer.indexOf("yeah") === -1 && answer.indexOf("yep") === -1);

alert("YAY! We are finally here!");