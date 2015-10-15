$(document).ready(function() {
	var numGuesses = 0;
	var firstGuess = 0;
	var secondGuess = 0;
	var thirdGuess = 0;
	$("#guess").on("click", function() {
		if (!$.isNumeric($("input").val())) {
			$("#GoAhead").text("That isn't a number...");
			// $("#TownSquare").animate({"margin-top": "-5px"}); 
		}
		if(parseInt($("input").val()) === firstGuess) {
			$("#GoAhead").text("You already said that...")
		}
		if(parseInt($("input").val()) === secondGuess) {
			$("#GoAhead").text("You already said that...")
		}
		if(parseInt($("input").val()) === thirdGuess) {
			$("#GoAhead").text("You already said that...")
		}
		else if ($.isNumeric($("input").val())) {
			if(parseInt($("input").val()) > 0) {
				if(parseInt($("input").val()) !== firstGuess && parseInt($("input").val()) !== secondGuess && parseInt($("input").val()) !== thirdGuess) {
					if(parseInt($("input").val()) < 30) {
						if(numGuesses === 0){
							$("#GoAhead").html("Cold! Freezing!<br>2 more guesses...");
							numGuesses++;
							firstGuess += parseInt($("input").val());
						}
						else if(numGuesses === 1){
							$("#GoAhead").html("Still very cold!<br>1 more guess...");
							numGuesses++;
							secondGuess += parseInt($("input").val());
						}
						else if(numGuesses === 2){
							$("#GoAhead").html("Wrong!<br>You lose...");
							numGuesses++;
							thirdGuess += parseInt($("input").val());
						}
					}
					if(parseInt($("input").val()) >= 30 && parseInt($("input").val()) <= 60) {
						if(numGuesses === 0) {
							$("#GoAhead").html("Chilly! Guess higher!<br>2 more guesses...");
							numGuesses++;
							firstGuess += parseInt($("input").val());
						}
						else if(numGuesses === 1) {
							$("#GoAhead").html("Still chilly!<br>1 more guess...");
							numGuesses++;
							secondGuess += parseInt($("input").val());
						}
						else if(numGuesses === 2){
							$("#GoAhead").html("Wrong!<br>You lose...");
							numGuesses++;
							thirdGuess += parseInt($("input").val());
						}
					}
					if(parseInt($("input").val()) > 60 && parseInt($("input").val()) < 80) {
						if(numGuesses === 0) {
							$("#GoAhead").html("Not cold... Guess higher!<br>2 more guesses...");
							numGuesses++;
							firstGuess += parseInt($("input").val());
						}
						else if(numGuesses === 1) {
							$("#GoAhead").html("Getting warmer!<br>1 more guess...");
							numGuesses++;
							secondGuess += parseInt($("input").val());
						}
						else if(numGuesses === 2){
							$("#GoAhead").html("Wrong!<br>You lose...");
							numGuesses++;
							thirdGuess += parseInt($("input").val());
						}
					}
					if(parseInt($("input").val()) >= 80 && parseInt($("input").val()) < 90) {
						if(numGuesses === 0) {
							$("#GoAhead").html("Warm! But not quite right.<br>2 more guesses...");
							numGuesses++;
							firstGuess += parseInt($("input").val());
						}
						else if(numGuesses === 1) {
							$("#GoAhead").html("Getting warmer!<br>1 more guess...");
							numGuesses++;
							secondGuess += parseInt($("input").val());
						}
						else if(numGuesses === 2){
							$("#GoAhead").html("Wrong!<br>You lose...");
							numGuesses++;
							thirdGuess += parseInt($("input").val());
						}
					}
					if(parseInt($("input").val()) >= 90 && parseInt($("input").val()) !== 93) {
						if(numGuesses === 0) {
							$("#GoAhead").html("Hot! But incorrect!<br>2 more guesses...");
							numGuesses++;
							firstGuess += parseInt($("input").val());
						}
						else if(numGuesses === 1) {
							$("#GoAhead").html("Hot!! But still incorrect.<br>1 more guess...");
							numGuesses++;
							secondGuess += parseInt($("input").val());
						}
						else if(numGuesses === 2){
							$("#GoAhead").html("So close! But wrong!<br>You lose...");
							numGuesses++;
							thirdGuess += parseInt($("input").val());
						}
					}
					if(parseInt($("input").val()) === 93) {
						$("img").animate({"margin-right": "-150px"}, 50);
						$("img").animate({"margin-left": "-150px"}, 50);
						$("img").animate({"margin-right": "-200px"}, 50);
						$("img").animate({"margin-left": "-200px"}, 50);
						$("img").animate({"margin-right": "-250px"}, 50);
						$("img").animate({"margin-left": "-250px"}, 50);
						$("#GoAhead").text("You win!!!!!");
						$("#GoAhead").animate({"font-size": "3em"});
						$("#VictorySong").slideDown();
					}
				}
			}
			else {
				$("#GoAhead").text("That isn't between 1-100");
			}
		}
	})
	$("input").keypress(function(e) {
	    if(e.which == 13) {
	        event.preventDefault();
	        if (!$.isNumeric($("input").val())) {
				$("#GoAhead").text("That isn't a number...");
			}
			if(parseInt($("input").val()) === firstGuess) {
				$("#GoAhead").text("You already said that...")
			}
			if(parseInt($("input").val()) === secondGuess) {
				$("#GoAhead").text("You already said that...")
			}
			if(parseInt($("input").val()) === thirdGuess) {
				$("#GoAhead").text("You already said that...")
			}
			else if ($.isNumeric($("input").val())) {
				if(parseInt($("input").val()) > 0) {
					if(parseInt($("input").val()) !== firstGuess && parseInt($("input").val()) !== secondGuess && parseInt($("input").val()) !== thirdGuess) {
						if(parseInt($("input").val()) < 30) {
							if(numGuesses === 0){
								$("#GoAhead").html("Cold! Freezing!<br>2 more guesses...");
								numGuesses++;
								firstGuess += parseInt($("input").val());
							}
							else if(numGuesses === 1){
								$("#GoAhead").html("Still very cold!<br>1 more guess...");
								numGuesses++;
								secondGuess += parseInt($("input").val());
							}
							else if(numGuesses === 2){
								$("#GoAhead").html("Wrong!<br>You lose...");
								numGuesses++;
								thirdGuess += parseInt($("input").val());
							}
						}
						if(parseInt($("input").val()) >= 30 && parseInt($("input").val()) <= 60) {
							if(numGuesses === 0) {
								$("#GoAhead").html("Chilly! Guess higher!<br>2 more guesses...");
								numGuesses++;
								firstGuess += parseInt($("input").val());
							}
							else if(numGuesses === 1) {
								$("#GoAhead").html("Still chilly!<br>1 more guess...");
								numGuesses++;
								secondGuess += parseInt($("input").val());
							}
							else if(numGuesses === 2){
								$("#GoAhead").html("Wrong!<br>You lose...");
								numGuesses++;
								thirdGuess += parseInt($("input").val());
							}
						}
						if(parseInt($("input").val()) > 60 && parseInt($("input").val()) < 80) {
							if(numGuesses === 0) {
								$("#GoAhead").html("Not cold... Guess higher!<br>2 more guesses...");
								numGuesses++;
								firstGuess += parseInt($("input").val());
							}
							else if(numGuesses === 1) {
								$("#GoAhead").html("Getting warmer!<br>1 more guess...");
								numGuesses++;
								secondGuess += parseInt($("input").val());
							}
							else if(numGuesses === 2){
								$("#GoAhead").html("Wrong!<br>You lose...");
								numGuesses++;
								thirdGuess += parseInt($("input").val());
							}
						}
						if(parseInt($("input").val()) >= 80 && parseInt($("input").val()) < 90) {
							if(numGuesses === 0) {
								$("#GoAhead").html("Warm! But not quite right.<br>2 more guesses...");
								numGuesses++;
								firstGuess += parseInt($("input").val());
							}
							else if(numGuesses === 1) {
								$("#GoAhead").html("Getting warmer!<br>1 more guess...");
								numGuesses++;
								secondGuess += parseInt($("input").val());
							}
							else if(numGuesses === 2){
								$("#GoAhead").html("Wrong!<br>You lose...");
								numGuesses++;
								thirdGuess += parseInt($("input").val());
							}
						}
						if(parseInt($("input").val()) >= 90 && parseInt($("input").val()) !== 93) {
							if(numGuesses === 0) {
								$("#GoAhead").html("Hot! But incorrect!<br>2 more guesses...");
								numGuesses++;
								firstGuess += parseInt($("input").val());
							}
							else if(numGuesses === 1) {
								$("#GoAhead").html("Hot!! But still incorrect.<br>1 more guess...");
								numGuesses++;
								secondGuess += parseInt($("input").val());
							}
							else if(numGuesses === 2){
								$("#GoAhead").html("So close! But wrong!<br>You lose...");
								numGuesses++;
								thirdGuess += parseInt($("input").val());
							}
						}
						if(parseInt($("input").val()) === 93) {
							$("img").animate({"margin-right": "-150px"}, 50);
							$("img").animate({"margin-left": "-150px"}, 50);
							$("img").animate({"margin-right": "-200px"}, 50);
							$("img").animate({"margin-left": "-200px"}, 50);
							$("img").animate({"margin-right": "-250px"}, 50);
							$("img").animate({"margin-left": "-250px"}, 50);
							$("#GoAhead").text("You win!!!!!");
							$("#GoAhead").animate({"font-size": "3em"});
							$("#VictorySong").slideDown();
						}
					}
				}
				else {
					$("#GoAhead").text("That isn't between 1-100");
				}
			}
	    }
	});
	$("#again").on("click", function() {
		location.reload();
	});
	$("#defeat").on("click", function() {
		$("#answer").slideDown();
	})
});


// var magicNum = 93;



