$(document).ready(function() {
	$("ul.tabs li.label").hide();
	$("#tab-set > div").hide();
	$("#tab-set > div").eq(0).show();

	$("ul.tabs a").click(function() {
		$("ul.tabs a.selected").removeClass('selected');
		$("#tab-set > div").hide();
		$("" + $(this).attr("href")).animate({
			opacity : 'show'
		}, 1500);

		$(this).addClass('selected');
		return false;
	});
}); 