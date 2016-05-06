
$(document).ready(function() {	

	// document.getElementById("numberStatus").innerHTML = "Incorrect order";
	// document.getElementById("catStatus").innerHTML = "Incorrect";
	var numberMovesCounter = 3;
	var catMovesCounter = 4;
	document.getElementById("number-quiz-moves").innerHTML = "3";
	document.getElementById("cat-quiz-moves").innerHTML = "4";

	var correctNumbersQuizOrder = ["number3", "number6","number9" ];
	var correctCatQuizOrder = ["cat-C","cat-A","cat-T"];
	var notifyIncorrect = "Not yet, keep trying.";
	var notifiyCorrect = "Correct!";
	var gameover = "Sorry, you used all of your available moves.";

	
	// Select a random word for drag/drop quiz
	var randomNumber = Math.floor(Math.random() * 3) + 1;
	// console.log(randomNumber);
	if (randomNumber === 1) {
		document.getElementById("randomWord").innerHTML = "PLAY";
		$(".play-img").addClass('valid');
		$(".more-img, .same-img").addClass('invalid');
	} else if (randomNumber === 2) {
		document.getElementById("randomWord").innerHTML = "MORE";
		$(".more-img").addClass('valid');
		$(".play-img, .same-img").addClass('invalid');
	} else {
		document.getElementById("randomWord").innerHTML = "SAME";
		$(".same-img").addClass('valid');
		$(".more-img, .same-img").addClass('invalid');
	}


// Arranging numbers Quiz

	$(".sortables-numbersQuiz").sortable( {
		containment: ".numbers-quiz-container",
		revert: true,

		update: function( event, ui ) {			
			var currentNumberQuizOrder = $(this).sortable("toArray").toString();

			if ( currentNumberQuizOrder == correctNumbersQuizOrder && numberMovesCounter == 3 ) {
				numberMovesCounter--;
				console.log(numberMovesCounter);
				$(".hidethenshow-numberQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-numberQuiz").addClass("fader");
				document.getElementById("outcome-numberQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned 3 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">';
				$( ".sortables-numbersQuiz" ).sortable( "disable" );
				document.getElementById("number-quiz-moves").innerHTML = numberMovesCounter;
				// setLocalStorage("Q1Moves",numberMovesCounter);
			} else if ( currentNumberQuizOrder == correctNumbersQuizOrder && numberMovesCounter == 2) {
				numberMovesCounter--;
				console.log(numberMovesCounter);
				$(".hidethenshow-numberQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-numberQuiz").addClass("fader");
				document.getElementById("outcome-numberQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned 2 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">';
				$( ".sortables-numbersQuiz" ).sortable( "disable" );
				document.getElementById("number-quiz-moves").innerHTML = numberMovesCounter;
				// setLocalStorage("Q1Moves",numberMovesCounter);
			} else if ( currentNumberQuizOrder == correctNumbersQuizOrder && numberMovesCounter == 1) {
				numberMovesCounter--;
				console.log(numberMovesCounter);
				$(".hidethenshow-numberQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-numberQuiz").addClass("fader");
				document.getElementById("outcome-numberQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned a token.</p><img class="token" src="images/pencil.png" alt="">';
				$( ".sortables-numbersQuiz" ).sortable( "disable" );
				// setLocalStorage("Q1Moves",numberMovesCounter);			
			} else if  ( numberMovesCounter <= 1 ) {
				numberMovesCounter--;
				$(".hidethenshow-numberQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-numberQuiz").addClass("fader");
				document.getElementById("outcome-numberQuiz").innerHTML = '<h3 class="gameover">' + gameover + '</h3>' + '<p>You did not earn any tokens for this quiz.';
				document.getElementById("cat-quiz-moves").innerHTML = numberMovesCounter;				
				$( ".sortables-numbersQuiz" ).sortable( "disable" );
				document.getElementById("number-quiz-moves").innerHTML = numberMovesCounter;				
				// setLocalStorage("Q1Moves",numberMovesCounter);
			} else {
				numberMovesCounter--;
				document.getElementById("number-quiz-moves").innerHTML = numberMovesCounter;				
				//setLocalStorage("Q1Moves",numberMovesCounter);
			};
		}
	});



// Drag/drop Quiz

	$(".draggable-2").draggable( {
			containment: ".dragDropQuiz-container",
		});

	$(".droppable-2").droppable({
		// accept: ".valid",

		drop: function( event, ui ) {




			// var draggedID = $(this).attr("id");
			// console.log(draggedID);

			// if ( randomNumber == id of draggable )





		}
	});


// C-A-T Quiz

	$(".sortables-catQuiz").sortable( {
		containment: ".cat-quiz-container",
		revert: true,

		update: function( event, ui ) {
			var currentCatQuizOrder = $(this).sortable("toArray").toString();

			if ( currentCatQuizOrder == correctCatQuizOrder && catMovesCounter == 3 ) {
				catMovesCounter--;
				console.log(catMovesCounter);
				$(".hidethenshow-catQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-catQuiz").addClass("fader");				
				document.getElementById("outcome-catQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned 3 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">';
				$( ".sortables-catQuiz" ).sortable( "disable" );
				document.getElementById("cat-quiz-moves").innerHTML = catMovesCounter;				
				// setLocalStorage("catQuizMoves",catMovesCounter);
			} else if ( currentCatQuizOrder == correctCatQuizOrder && catMovesCounter == 2 ) {
				catMovesCounter--;
				console.log(catMovesCounter);
				$(".hidethenshow-catQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-catQuiz").addClass("fader");				
				document.getElementById("outcome-catQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned 2 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">';
				$( ".sortables-catQuiz" ).sortable( "disable" );
				document.getElementById("cat-quiz-moves").innerHTML = catMovesCounter;				
				// setLocalStorage("catQuizMoves",catMovesCounter);
			} else if ( currentCatQuizOrder == correctCatQuizOrder && catMovesCounter == 1 ) {
				catMovesCounter--;
				console.log(catMovesCounter);				
				$(".hidethenshow-catQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-catQuiz").addClass("fader");				
				document.getElementById("outcome-catQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned a token!</p><img class="token" src="images/pencil.png" alt="">';								
				$( ".sortables-catQuiz" ).sortable( "disable" );
				document.getElementById("cat-quiz-moves").innerHTML = catMovesCounter;				
				// setLocalStorage("catQuizMoves",catMovesCounter);
			} else if ( catMovesCounter <= 1 ) {
				catMovesCounter--;
				console.log(catMovesCounter);
				$(".hidethenshow-catQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-catQuiz").addClass("fader");				
				document.getElementById("outcome-catQuiz").innerHTML = '<h3 class="gameover">' + gameover + '</h3>' + '<p>You did not earn any tokens for this quiz.</p>';				
				$( ".sortables-catQuiz" ).sortable( "disable" );
				document.getElementById("cat-quiz-moves").innerHTML = catMovesCounter;				
				// setLocalStorage("catQuizMoves",catMovesCounter);
			} else {
				catMovesCounter--;
				console.log(catMovesCounter);
				document.getElementById("cat-quiz-moves").innerHTML = catMovesCounter;				
				// setLocalStorage("catQuizMoves",catMovesCounter);
			};
		}
	});
});


// "I Love You" Quiz
	function correctResponse4() {
		$(".hidethenshow-iloveyouQuiz").removeClass("hidden").addClass("visible");
		$(".inner-wrapper-iloveyouQuiz").addClass("fader");				
		document.getElementById("outcome-iloveyouQuiz").innerHTML = '<h3>Correct</h3><p>You earned 2 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">'; ;				
		$( ".quiz-btn" ).prop("disabled",true);
	}

	function incorrectResponse4() {
		$(".hidethenshow-iloveyouQuiz").removeClass("hidden").addClass("visible");
		$(".inner-wrapper-iloveyouQuiz").addClass("fader");				
		document.getElementById("outcome-iloveyouQuiz").innerHTML = '<h3 class="gameover">That is incorrect.</h3><p>You did not earn any tokens for this quiz.</p>' ;				
		$( ".quiz-btn" ).prop("disabled",true);
	}


function saveResults() {
	//Quiz one
	var moves_quiz1 = document.getElementById("cat-quiz-moves").innerHTML;
	var hint_quiz1 = document.getElementById("outcome-catQuiz").innerHTML;
	var result_quiz1 = '';
	if (hint_quiz1 == "That's correct.")
		result_quiz1 = "correct";
	else
		result_quiz1 = "wrong";
	if (moves_quiz1 == "--" || moves_quiz1 == "")
	  moves_quiz1 = "0"
	localStorage.setItem("moves_quiz1", moves_quiz1);
	localStorage.setItem("result_quiz1", result_quiz1);

	//Quiz two
	var hint_quiz2 = document.getElementById("outcome-numberQuiz").innerHTML;
	var result_quiz2 = '';
	if (hint_quiz2 == "That's correct.")
		result_quiz2 = "correct";
	else
		result_quiz2 = "wrong";
	localStorage.setItem("result_quiz2", result_quiz2);

	//Quiz three
	
	//Quiz four

	// Summary
	var correctAnswers = 0;
	correctAnswers = (result_quiz1 == "correct") + (result_quiz2 == "correct");
	var correctRate = correctAnswers/2.0 * 100;
	var scoreHistory = JSON.parse(localStorage.getItem('scoreHistory')) || [];
	scoreHistory.push(correctRate);
	localStorage.setItem('scoreHistory', JSON.stringify(scoreHistory));
	
	document.getElementById("chart").style.display = "block";

	var resultChart;
	resultChart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart',
			type: 'area',
		},
		title: {
			text: 'Records chart'
		},
		yAxis: {
			title: {
				text: "Correct rate/ \%"
			},
			min: 0,
			max: 100 
		},
		series: [{
			name: 'Correct rate in history',
			data: scoreHistory
		}]
	})
	
}


	

	
