$(document).ready(function() {	

	document.getElementById("hint1").innerHTML = "Incorrect order";
	document.getElementById("hint3").innerHTML = "Incorrect order";
	var sortCounter1 = 0;
	var sortCounter3 = 0;
	document.getElementById("moves1").innerHTML = "--";
	document.getElementById("moves3").innerHTML = "--";

	var orderQuiz1 = [1.3,1.6,1.9];
	var orderQuiz3 = [3.1,3.2,3.3];
	var notifyIncorrect = "Not yet, keep trying.";
	var notifiyCorrect = "That's correct."

	
	var randomNumber = Math.floor(Math.random() * 3) + 1;
	console.log(randomNumber);
	if (randomNumber === 1) {
		document.getElementById("randomWord").innerHTML = "PLAY";
		$(".play-img").addClass('valid');
	} else if (randomNumber === 2) {
		document.getElementById("randomWord").innerHTML = "MORE";
		$(".more-img").addClass('valid');
	} else {
		document.getElementById("randomWord").innerHTML = "SAME";
		$(".same-img").addClass('valid');
	}

	// var draggableID = $(".valid").attr("id");
	// console.log(draggableID);


	$(".sortables-1").sortable( {
		containment: ".quiz1-container",
		revert: true,

		update: function( event, ui ) {			
			var sortedIDsQuiz1 = $(this).sortable("toArray").toString();

			if ( sortedIDsQuiz1 == orderQuiz1 ) {
				sortCounter1++;
				document.getElementById("moves1").innerHTML = sortCounter1;
				// console.log(sortedIDsQuiz1, orderQuiz1);
				document.getElementById("hint1").innerHTML = notifiyCorrect;
				$( ".sortables-1" ).sortable( "disable" );
				setLocalStorate("Q1Moves",sortCounter1);
			} else {
				sortCounter1++;
				document.getElementById("moves1").innerHTML = sortCounter1;				
				// console.log(sortedIDsQuiz1, orderQuiz1);
				document.getElementById("hint1").innerHTML = notifyIncorrect;
				setLocalStorate("Q1Moves",sortCounter1);
			};
		}
	});

	$(".draggable-2").draggable( {
			containment: ".quiz2-container",
		});

	$(".droppable-2").droppable({
		drop: function( event, ui ) {

			var draggableID = $(".valid").attr("id");
			console.log(draggableID);

			// if ( randomNumber == id of draggable )
		}
	});

	$(".sortables-3").sortable( {
		containment: ".quiz3-container",
		revert: true,

		update: function( event, ui ) {
			var sortedIDsQuiz3 = $(this).sortable("toArray").toString();

			if ( sortedIDsQuiz3 == orderQuiz3 ) {
				sortCounter3++;
				document.getElementById("moves3").innerHTML = sortCounter3;				
				// console.log(sortedIDsQuiz3, orderQuiz3, notifiyCorrect);
				document.getElementById("hint3").innerHTML = notifiyCorrect;
				$( ".sortables-3" ).sortable( "disable" );
			} else {
				sortCounter3++;
				document.getElementById("moves3").innerHTML = sortCounter3;				
				// console.log(sortedIDsQuiz3, orderQuiz3, notifyIncorrect);
				document.getElementById("hint3").innerHTML = notifyIncorrect;
			};
		}
	});
});

	function incorrectResponse4() {
		document.getElementById("outcome4").innerHTML = '<h3>That is incorrect. Perhaps you should go back to <a href="expression.html">Learn</a> more.<h3>';
		document.getElementById("quiz-btn1").disabled = true;
		document.getElementById("quiz-btn2").disabled = true;
		document.getElementById("quiz-btn3").disabled = true;
	}

	function correctResponse4() {
		document.getElementById("outcome4").innerHTML = '<h3>Correct, great job!<h3>';
		document.getElementById("quiz-btn1").disabled = true;
		document.getElementById("quiz-btn2").disabled = true;
		document.getElementById("quiz-btn3").disabled = true;
	}



	