$(document).ready(function() {	


	// document.getElementById("numberStatus").innerHTML = "Incorrect order";
	// document.getElementById("catStatus").innerHTML = "Incorrect";

	// Define variables
	var catMovesCounter = 4;
	var numberMovesCounter = 3;
	var dragMovesCounter = 0;
	var correctNumbersQuizOrder = ["number3", "number6","number9" ];
	var correctCatQuizOrder = ["cat-C","cat-A","cat-T"];
	var notifyIncorrect = "Not yet, keep trying.";
	var notifiyCorrect = "Correct!";
	var gameover = "Sorry, you used all of your available moves.";


// ****************************************************************************************************************
// Start Cat Quiz
// ****************************************************************************************************************

	// Set max number of moves for quiz
	document.getElementById("cat-quiz-moves").innerHTML = "4";	


	// Enable sortable elements
	$(".sortables-catQuiz").sortable( {
		containment: ".cat-quiz-container",
		revert: true,

		update: function( event, ui ) {

			var currentCatQuizOrder = $(this).sortable("toArray").toString();

			// check order of sorted images and determine response
			if ( currentCatQuizOrder == correctCatQuizOrder && catMovesCounter == 3 ) {
				catMovesCounter--;
				// console.log(catMovesCounter);
				$(".hidethenshow-catQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-catQuiz").addClass("fader");				
				document.getElementById("outcome-catQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned 3 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">';
				$( ".sortables-catQuiz" ).sortable( "disable" );
				document.getElementById("cat-quiz-moves").innerHTML = catMovesCounter;
				var catQuizTokens = 3;	
				localStorage.setItem("catQuizTokens",catQuizTokens);
				console.log("cat quiz tokens:" + catQuizTokens);
			} else if ( currentCatQuizOrder == correctCatQuizOrder && catMovesCounter == 2 ) {
				catMovesCounter--;
				// console.log(catMovesCounter);
				$(".hidethenshow-catQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-catQuiz").addClass("fader");				
				document.getElementById("outcome-catQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned 2 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">';
				$( ".sortables-catQuiz" ).sortable( "disable" );
				document.getElementById("cat-quiz-moves").innerHTML = catMovesCounter;				
				var catQuizTokens = 2;				
				localStorage.setItem("catQuizTokens",catQuizTokens);
				console.log("cat quiz tokens:" + catQuizTokens);
			} else if ( currentCatQuizOrder == correctCatQuizOrder && catMovesCounter == 1 ) {
				catMovesCounter--;
				// console.log(catMovesCounter);				
				$(".hidethenshow-catQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-catQuiz").addClass("fader");				
				document.getElementById("outcome-catQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned a token!</p><img class="token" src="images/pencil.png" alt="">';								
				$( ".sortables-catQuiz" ).sortable( "disable" );
				document.getElementById("cat-quiz-moves").innerHTML = catMovesCounter;				
				var catQuizTokens = 1;				
				localStorage.setItem("catQuizTokens",catQuizTokens);
				console.log("cat quiz tokens:" + catQuizTokens);
			} else if ( catMovesCounter <= 1 ) {
				catMovesCounter--;
				// console.log(catMovesCounter);
				$(".hidethenshow-catQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-catQuiz").addClass("fader");				
				document.getElementById("outcome-catQuiz").innerHTML = '<h3 class="gameover">' + gameover + '</h3>' + '<p>You did not earn any tokens for this quiz.</p>';				
				$( ".sortables-catQuiz" ).sortable( "disable" );
				document.getElementById("cat-quiz-moves").innerHTML = catMovesCounter;				
				var catQuizTokens = 0;				
				localStorage.setItem("catQuizTokens",catQuizTokens);
				console.log("cat quiz tokens:" + catQuizTokens);
			} else {
				catMovesCounter--;
				// console.log(catMovesCounter);
				document.getElementById("cat-quiz-moves").innerHTML = catMovesCounter;				
			};
		}
	});
// ****************************************************************************************************************
// End Cat Quiz  
// ****************************************************************************************************************



// ****************************************************************************************************************
// Start Numbers Quiz
// ****************************************************************************************************************
	
	// Set max number of moves for quiz
	document.getElementById("number-quiz-moves").innerHTML = "3";

	// Enable sortable elements
	$(".sortables-numbersQuiz").sortable( {
		containment: ".numbers-quiz-container",
		revert: true,

		update: function( event, ui ) {			
			var currentNumberQuizOrder = $(this).sortable("toArray").toString();

			// check order of sorted images and determine response
			if ( currentNumberQuizOrder == correctNumbersQuizOrder && numberMovesCounter == 3 ) {
				numberMovesCounter--;
				// console.log(numberMovesCounter);
				$(".hidethenshow-numberQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-numberQuiz").addClass("fader");
				document.getElementById("outcome-numberQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned 3 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">';
				$( ".sortables-numbersQuiz" ).sortable( "disable" );
				document.getElementById("number-quiz-moves").innerHTML = numberMovesCounter;
				var numberQuizTokens = 3;
				localStorage.setItem("numberQuizTokens",numberQuizTokens);
				console.log("number quiz tokens:" + numberQuizTokens);
				// setLocalStorage("Q1Moves",numberMovesCounter);
			} else if ( currentNumberQuizOrder == correctNumbersQuizOrder && numberMovesCounter == 2) {
				numberMovesCounter--;
				// console.log(numberMovesCounter);
				$(".hidethenshow-numberQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-numberQuiz").addClass("fader");
				document.getElementById("outcome-numberQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned 2 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">';
				$( ".sortables-numbersQuiz" ).sortable( "disable" );
				document.getElementById("number-quiz-moves").innerHTML = numberMovesCounter;
				var numberQuizTokens = 2;
				localStorage.setItem("numberQuizTokens",numberQuizTokens);
				console.log("number quiz tokens:" + numberQuizTokens);
				// setLocalStorage("Q1Moves",numberMovesCounter);
			} else if ( currentNumberQuizOrder == correctNumbersQuizOrder && numberMovesCounter == 1) {
				numberMovesCounter--;
				// console.log(numberMovesCounter);
				$(".hidethenshow-numberQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-numberQuiz").addClass("fader");
				document.getElementById("outcome-numberQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned a token.</p><img class="token" src="images/pencil.png" alt="">';
				$( ".sortables-numbersQuiz" ).sortable( "disable" );
				var numberQuizTokens = 1;
				localStorage.setItem("numberQuizTokens",numberQuizTokens);
				console.log("number quiz tokens:" + numberQuizTokens);
				// setLocalStorage("Q1Moves",numberMovesCounter);			
			} else if  ( numberMovesCounter <= 1 ) {
				numberMovesCounter--;
				$(".hidethenshow-numberQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-numberQuiz").addClass("fader");
				document.getElementById("outcome-numberQuiz").innerHTML = '<h3 class="gameover">' + gameover + '</h3>' + '<p>You did not earn any tokens for this quiz.';
				document.getElementById("cat-quiz-moves").innerHTML = numberMovesCounter;				
				$( ".sortables-numbersQuiz" ).sortable( "disable" );
				document.getElementById("number-quiz-moves").innerHTML = numberMovesCounter;				
				var numberQuizTokens = 0;
				localStorage.setItem("numberQuizTokens",numberQuizTokens);
				console.log("number quiz tokens:" + numberQuizTokens);
				// setLocalStorage("Q1Moves",numberMovesCounter);
			} else {
				numberMovesCounter--;
				document.getElementById("number-quiz-moves").innerHTML = numberMovesCounter;				
				//setLocalStorage("Q1Moves",numberMovesCounter);
			};
		}
	});
// ****************************************************************************************************************
// End Numbers Quiz  
// ****************************************************************************************************************



// ****************************************************************************************************************
// Start Drag/drop Quiz
// ****************************************************************************************************************

	// Select a random word for drag/drop quiz
	var randomNumber = Math.floor(Math.random() * 3) + 1;
	// console.log(randomNumber);
	if (randomNumber === 1) {
		document.getElementById("randomWord").innerHTML = "PLAY";
		// $(".play-img").addClass('valid');
		// $(".more-img, .same-img").addClass('invalid');
	} else if (randomNumber === 2) {
		document.getElementById("randomWord").innerHTML = "MORE";
		// $(".more-img").addClass('valid');
		// $(".play-img, .same-img").addClass('invalid');
	} else {
		document.getElementById("randomWord").innerHTML = "SAME";
		// $(".same-img").addClass('valid');
		// $(".more-img, .same-img").addClass('invalid');
	}

	// Enable draggable elements
	$(".draggable").draggable( {
			containment: ".dragDropQuiz-container",
		});

	// Enable droppable elements
	$(".droppable").droppable({

		drop: function( event, ui ) {

			// Change status and style of dropped element
			$(ui.draggable).addClass("dropped").draggable("disable");

			// Check what image was dropped into the box 
			if ( $(ui.draggable).attr("id") == randomNumber ) {
				dragMovesCounter++;
				$(".hidethenshow-dragdropQuiz").removeClass("hidden").addClass("visible");
				$(".inner-wrapper-dragdropQuiz").addClass("fader");

				// Determine correct outcome response
				if ( dragMovesCounter === 1 ) {
					document.getElementById("outcome-dragdropQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned 3 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">';
					var dragdropQuizTokens = 3;
					localStorage.setItem("dragdropQuizTokens",dragdropQuizTokens);
					console.log("dragdrop quiz tokens:" + dragdropQuizTokens);
				} else if ( dragMovesCounter === 2 ) {
					document.getElementById("outcome-dragdropQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned 2 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">';					
					var dragdropQuizTokens = 2;
					localStorage.setItem("dragdropQuizTokens",dragdropQuizTokens);
					console.log("dragdrop quiz tokens:" + dragdropQuizTokens);
				} else {
					document.getElementById("outcome-dragdropQuiz").innerHTML = '<h3>' + notifiyCorrect + '</h3>' + '<p>You earned 1 token.</p><img class="token" src="images/pencil.png" alt="">';
					var dragdropQuizTokens = 1;
					localStorage.setItem("dragdropQuizTokens",dragdropQuizTokens);
					console.log("dragdrop quiz tokens:" + dragdropQuizTokens);
				}

			} else {
				dragMovesCounter++;
			}
		}
	});
});
// ****************************************************************************************************************
// End DragDrop Quiz  
// ****************************************************************************************************************



// ****************************************************************************************************************
// Start "I Love You" Quiz
// ****************************************************************************************************************
	function correctResponse4() {
		$(".hidethenshow-iloveyouQuiz").removeClass("hidden").addClass("visible");
		$(".inner-wrapper-iloveyouQuiz").addClass("fader");				
		document.getElementById("outcome-iloveyouQuiz").innerHTML = '<h3>Correct</h3><p>You earned 2 tokens!</p><img class="token" src="images/pencil.png" alt=""><img class="token" src="images/pencil.png" alt="">'; ;				
		$( ".quiz-btn" ).prop("disabled",true);
		var iloveyouQuizTokens = 2;
		localStorage.setItem("iloveyouQuizTokens",iloveyouQuizTokens);
		console.log("love quiz tokens:" + iloveyouQuizTokens);
	}

	function incorrectResponse4() {
		$(".hidethenshow-iloveyouQuiz").removeClass("hidden").addClass("visible");
		$(".inner-wrapper-iloveyouQuiz").addClass("fader");				
		document.getElementById("outcome-iloveyouQuiz").innerHTML = '<h3 class="gameover">That is incorrect.</h3><p>You did not earn any tokens for this quiz.</p>' ;				
		$( ".quiz-btn" ).prop("disabled",true);
		var iloveyouQuizTokens = 0;
		localStorage.setItem("iloveyouQuizTokens",iloveyouQuizTokens);
		console.log("love quiz tokens:" + iloveyouQuizTokens);
	}
// ****************************************************************************************************************
// End "I Love You" Quiz
// ****************************************************************************************************************


// ****************************************************************************************************************
// Start Results Chart
// ****************************************************************************************************************
function saveResults() {

	//Quiz one

	var tokens_catQuiz = parseInt(localStorage.getItem('catQuizTokens'));
	console.log("cat quiz:" + tokens_catQuiz);

	var tokens_numberQuiz = parseInt(localStorage.getItem('numberQuizTokens'));
	console.log("number quiz:" + tokens_numberQuiz);

	var tokens_dragdropQuiz = parseInt(localStorage.getItem('dragdropQuizTokens'));
	console.log("dragging quiz:" + tokens_dragdropQuiz);

	var tokens_loveQuiz = parseInt(localStorage.getItem('iloveyouQuizTokens'));
	console.log("love quiz:" + tokens_loveQuiz);

	var totalTokens = tokens_catQuiz + tokens_numberQuiz + tokens_dragdropQuiz + tokens_loveQuiz;
	console.log("total:" + totalTokens);


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

	//Summary

	var correctAnswers = 0;
	correctAnswers = (result_quiz1 == "correct") + (result_quiz2 == "correct");
	var correctRate = correctAnswers/2.0 * 100;
	var scoreHistory = JSON.parse(localStorage.getItem('scoreHistory')) || [];
	scoreHistory.push(correctRate);
	localStorage.setItem('scoreHistory', JSON.stringify(scoreHistory));
	
	document.getElementById("chart").style.display = "block";
	document.getElementById("bars").style.display = "block";

	var resultChart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart',
			type: 'area',
		},
		title: {
			text: 'Reords chart'
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

	var barChart = new Highcharts.Chart({
				chart: {
					renderTo: 'bars',
					type: 'column'
				},
				title: {
					text: 'Tokens earned'
				},
				xAxis: {
					categories: ['quiz1', 'quiz2', 'quiz3', 'quiz4']
				},
				yAxis: {
					
					title: {
						text: 'Number of tokens'
					},
					max:4,
					min:0
				},
				series: [{
					Name: 'Number of tokens earned',
					data: [tokens_catQuiz, tokens_numberQuiz, tokens_dragdropQuiz, tokens_loveQuiz]
				}]
			});
}


	

	
