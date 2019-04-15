const gamestatus1 = document.getElementById("gamestatus1");
var gamestatus2 = document.getElementById("gamestatus2");

/*
gamestatus1.textContent = "";
gamestatus2.textContent = "";
console.log(gamestatus1);
console.log(gamestatus2);
*/

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
			
			if (parseInt(gamestatus2.textContent) > 2 && parseInt(gamestatus2.textContent) < 21) {
				document.onkeyup = null; // good number of players, stop listening for numbers
				enteredPlayers = parseInt(gamestatus2.textContent);
				gamestatus1.textContent = "";
				gamestatus2.textContent = "";
				initializePlayers(enteredPlayers);
			}
			else {
				gamestatus1.textContent = "please choose a number of players from 3 to 20."; gamestatus2.textContent = "";
			}
		}
	}
	
	function initializePlayers(num) {
		for (var x = 0; x < num; x++) {
			var newPlayer = {};
			newPlayer.chips = 10;
			gameobj.players.push(newPlayer);
		}
	}
	
	
}

function play(gameobj) {
	console.log(gameobj);
}
	
initializeGame(game);
play(game);