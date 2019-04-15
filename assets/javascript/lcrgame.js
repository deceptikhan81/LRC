const gamestatus1 = document.getElementById("gamestatus1");
var gamestatus2 = document.getElementById("gamestatus2");

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
	var enteredPlayers = null;
	gamestatus1.textContent = "How many players? (For 3 to 20 players)";
	gamestatus2.textContent = "";
	
	document.onkeyup = function(event) {
		var pressedkey = event.key;
		var numString = "";
		if ("1234567890".includes(pressedkey)) {
			if(gamestatus2.textContent.length < 2) gamestatus2.textContent += pressedkey;
			else if (gamestatus2.textContent.length === 2) {
				numString = gamestatus2.textContent.charAt(1) + pressedkey;
				gamestatus2.textContent = numString;
			}
		}
		if (event.which === 13) {
			enteredPlayers = parseInt(gamestatus2.textContent);
			console.log(enteredPlayers);
			if (enteredPlayers > 2 && enteredPlayers < 21) { console.log("good number of players");} // good number of players
			else {
				gamestatus1.textContent = "please choose a number of players from 3 to 20."; gamestatus2.textContent = "";
			}
		}
	}
}

function play(gameobj) {
}
	
initializeGame(game);
play(game);