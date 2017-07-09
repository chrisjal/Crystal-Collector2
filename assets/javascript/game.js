// created: July 8, 2017 18:00
// Author: Chris Jalallian
// Revisions: 

var goalPoints, redValue, blueValue, greenValue, purpleValue, playerPoints = 0;

// Set to begin @1 because first increment would be 0 otherwise, as it is not written elsewhere
var wins = 1;
var losses = 1;

// Instruction toggle
$("#instruction-toggle").click(function(){
	$("#instruction-container").slideToggle("slow");
});

function game() {
	// Resets playerPoints to 0
	playerPoints = 0;
	$("#current-points").html(playerPoints);

	// Generates Goal # between 19-120
	goalPoints = [Math.floor(Math.random() * (120 - 19 + 1)) + 19];
	$("#goalValue").html(goalPoints);
	
	// Generate random values for the Jewels 1-12
	redValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
	blueValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
	greenValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
	purpleValue = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
	
	// Set html element values
	$("#redButton").val(redValue);
	$("#blueButton").val(blueValue);
	$("#greenButton").val(greenValue);
	$("#purpleButton").val(purpleValue);
}

function checkwin() {
	// If win/loss, restart game, write incremental result
	if (playerPoints > goalPoints) {
		game();
		$("#lossTotal").html(losses++).effect("bounce","slow");
	}
	if (playerPoints == goalPoints) {
		game();
		$("#winTotal").html(wins++).effect("bounce","slow");
	}
}

// Click button gets jewel value and adds to current points, runs effects, and checks win condition
$('button').click(function() {
	var buttonValue = $(this).attr('value');
	playerPoints = playerPoints + parseInt(buttonValue);
	$("#current-points").html(playerPoints).effect("highlight","fast");
	$("#last-points").html("+" + buttonValue).fadeIn().fadeOut();
	checkwin();
})

game();