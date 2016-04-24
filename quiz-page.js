$(document).ready(function() {	
	// var chart = new Highcharts.Chart()
	// {
				// chart: {
				// 		renderTo: 'chartcontainer',
				// 		type: 'column',
				// 	},
				// 	title: {
				// 		text: 'Quiz Results'
				// 	},
				// 	xAxis: {
				// 		categories: ['Correct', 'Incorrect']
				// 	},
				// 	yAxis: {
				// 		title: 'Response'
				// 		},
				// 		stackLables: {
				// 			enabled: true,
				// 		},
				// 		plotOptions: {
				// 			column: {
				//                 stacking: 'normal',
				// 				}
				// 		},

				// 	series: [{
				// 		name: 'Mary',
				// 		data: [1,3,6]
				// 	}, {
				// 		name: 'Bob',
				// 		data: [5,7,2]
				// 	}]
				// });

	$(".sortables-1").sortable( {
			containment: ".quiz1-container"
		});

	$(".draggable-2").draggable( {
			containment: ".quiz2-container"
		});

	$(".droppable-2").droppable();

	$(".sortables-3").sortable( {
			containment: ".quiz3-container"
		});

	// (".selectable").selectable();
		// {
		// 	tolerance: "fit",
		// 	drop: function( event, ui ) {

		// 		$(ui.draggable).addClass("dropped");
		// 		var currentCount = $(".dropped").length;	

		// 		count++;
		// 		console.log(count,$(".draggables").length);

		// 		if ( count != $(".draggables").length ) {
		// 			document.getElementById('instructions1').innerHTML = countdown + " more to go";
		// 			countdown--;
		// 		} else {
		// 			$("#example1").hide();
		// 			document.getElementById('onedown').innerHTML = "<h2>Good job!<br>Move on to the next example.</h2>";
		// 			$("#example2").removeClass("hidden");
		// 			$("#example2").addClass("visible");
		// 			}
		// 		}
		// }

});
	// {
	// 	sort: function ( event, ui ) {

	// 	var sortorder = $("#sortable").sortable('toArray');

	// 		if ( sortorder != "li2", "li3", "li4", "li5", "li6", "li7" ) {
	// 			document.getElementById('instructions3').innerHTML = "Sort the following rows from the lightest on top to the darkest on the bottom.<br>";
	// 				console.log(sortorder);

	// 		} else {
	// 			document.getElementById('instructions3').innerHTML = "Way to go!  You are all done.<br>";
	// 			$("#example3").removeClass("visible");
	// 			$("#example3").addClass("hidden");
	// 		}

	// 	}

	// });

	