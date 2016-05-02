
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
				//setLocalStorage("Q1Moves",sortCounter1);
			} else {
				sortCounter1++;
				document.getElementById("moves1").innerHTML = sortCounter1;				
				// console.log(sortedIDsQuiz1, orderQuiz1);
				document.getElementById("hint1").innerHTML = notifyIncorrect;
				//setLocalStorage("Q1Moves",sortCounter1);
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

function saveResults() {
	//Quiz one
	var moves_quiz1 = document.getElementById("moves3").innerHTML;
	var hint_quiz1 = document.getElementById("hint3").innerHTML;
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
	var hint_quiz2 = document.getElementById("hint1").innerHTML;
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
	
}


	

	
