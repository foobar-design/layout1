$(document).ready(function() {
	$("li").hover(function(e) {
		var msg = $(this).children().eq(0).attr("msg");
		xOffset = 27;
		yOffset = 0;
		$("body").append("<p class='tooltip'>" + msg + "</p>");
		$(".tooltip").css("top", ($(this).position().top - xOffset) + "px")
					 .css("left", ($(this).position().left + yOffset) + "px").fadeIn(500);
	}, function() {
		$(".tooltip").remove();
	});
});