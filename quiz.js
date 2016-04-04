
function correctResponse() {
	$(".hidethenshow").removeClass("hidden").addClass("visible");
	$("#sample-vid").addClass("fader");
	$(".answer").prop("disabled", true);
	document.getElementById("outcome").innerHTML = '<h3>Correct</h3><br>Want to try some more <a href="quiz.html">quizzes?</a> <br><br><br>Prefer to begin learning <a href="expression.html#ABC">ABC\'s?</a>';
}

function wrongResponse() {
	$(".hidethenshow").removeClass("hidden").addClass("visible");
	$("#sample-vid").addClass("fader");
	$(".answer").prop("disabled", true);
	document.getElementById("outcome").innerHTML = '<h3>Incorrect</h3><br>Perhaps you should start with your <a href="expression.html#ABC">ABC\'s</a> <br><br><br>Or want to try more <a href="quiz.html">quizzes?</a>';
}



	