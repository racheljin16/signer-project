$(function(){
	var searchDBString = [
		{value: "Hello", url: "expression.html#hello"},
		{value:"Bye", url: "expression.html#bye"},
		{value:"I love you", url: "expression.html#iloveyou"},
		{value:"You", url: "expression.html#you"},
		{value:"Yes", url: "expression.html#yes"},
		{value:"No", url: "expression.html#no"},
		{value:"Help", url: "expression.html#help"},
		{value:"Play", url: "expression.html#play"},
		{value:"Bathroom", url: "expression.html#bathroom"},
		{value:"Day", url: "expression.html#day"},
		{value:"Hour", url: "expression.html#hour"},
		{value:"Same", url: "expression.html#same"},
		{value:"What", url: "expression.html#what"},
		{value:"Which", url: "expression.html#which"},
		{value:"More", url: "expression.html#more"},
		{value:"A", url: "expression.html#a"},
		{value:"B", url: "expression.html#b"},
		{value:"C", url: "expression.html#c"},
		{value:"E", url: "expression.html#e"},
		{value:"I", url: "expression.html#i"},
		{value:"O", url: "expression.html#o"},
		{value:"U", url: "expression.html#u"},
		{value:"1", url: "expression.html#1"},
		{value:"2", url: "expression.html#2"},
		{value:"3", url: "expression.html#3"},
		{value:"4", url: "expression.html#4"},
		{value:"5", url: "expression.html#5"},
		{value:"6", url: "expression.html#6"},
		{value:"7", url: "expression.html#7"},
		{value:"8", url: "expression.html#8"},
		{value:"9", url: "expression.html#9"},
		{value:"10", url: "expression.html#10"},
	];
	$("#autocomplete1").autocomplete({
		source: searchDBString,
		select: function(event, ui){
			window.location = ui.item.url;
	}
	});

});
