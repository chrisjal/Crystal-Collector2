// created: July 2, 2017 12:00PM
// Author: Chris Jalallian
// Revisions: CJ 7/2 16:30 finished game logic, commented code

var goalPoints, redValue, blueValue, greenValue, purpleValue;
var wins = 1;
var losses = 1;


// Instructions
$("#instruction-toggle").click(function(){
	$("#instruction-container").slideToggle("slow");
});

function game() {
	//resets playerPoints to 0
	playerPoints = 0;
	document.getElementById("currentPoints").innerHTML = playerPoints = 0;
	
	//Generates Goal # between 19-120
	goalPoints = [Math.floor(Math.random() * (120 - 19 + 1)) + 19];
	document.getElementById("goalValue").innerHTML = goalPoints;
	
	//Generate random values for the Jewels
	redValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
	blueValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
	greenValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
	purpleValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];

}

function checkwin() {
	//if loss, restart game, write loss +1
	if (playerPoints > goalPoints) {
		game();
		return document.getElementById("lossTotal").innerHTML = losses++;
	}
	//if win, restart game, write win +1
	if (playerPoints == goalPoints) {
		game();
		return document.getElementById("winTotal").innerHTML = wins++;
	}
}

// Incrementing jewel values below add to playerPoints
function red() {
	playerPoints = playerPoints + parseInt(redValue);
	document.getElementById("currentPoints").innerHTML = playerPoints;
}

function blue() {
	playerPoints = playerPoints + parseInt(blueValue);
	document.getElementById("currentPoints").innerHTML = playerPoints;
}

function green() {
	playerPoints = playerPoints + parseInt(greenValue);
	document.getElementById("currentPoints").innerHTML = playerPoints;
}

function purple() {
	playerPoints = playerPoints + parseInt(purpleValue);
	document.getElementById("currentPoints").innerHTML = playerPoints;
}

function addValue(value) {
	playerPoints = playerPoints + parseInt(value);
	document.getElementById("currentPoints").innerHTML = playerPoints;
}
// $('#redButton').click(function() {
// 	red();
// 	checkwin();
// })
// $('button').click(function() {
// 	var value = window[$(this).attr('data-value')]
// })

game();