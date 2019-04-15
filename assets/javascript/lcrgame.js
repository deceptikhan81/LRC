const gamestatus1 = document.getElementById("gamestatus1");
const gamestatus2 = document.getElementById("gamestatus2");

/*
gamestatus1.textContent = "";
gamestatus2.textContent = "";
console.log(gamestatus1);
console.log(gamestatus2);
*/

const player = {};

const game = {
	players		:	[],
	over		:	false
}

function initializeGame(gameobj) {
	gamestatus1.textContent = "How many players?";
	gamestatus2.textContent = "";
	
	document.onkeyup = function(event) {
		var pressedkey = event.key;
		if ("1234567890".includes(pressedkey)) gamestatus2.textContent += pressedkey;
	}
}

function play(gameobj) {
}
	
initializeGame(game);
play(game);