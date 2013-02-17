$(document).ready(function() {

	var images = new Array("http://www.whisky.de/shop/out/pictures/generated/product/1/150_187_75/image_BUNNA12NE_1.jpg", "http://www.whisky.de/shop/out/pictures/generated/product/1/150_187_75/image_SPRIN1000_1.jpg", "http://www.whisky.de/shop/out/pictures/generated/product/1/150_187_75/image_BRIAC00BI_1.jpg", "http://www.whisky.de/shop/out/pictures/generated/product/1/150_187_75/image_ARRAN1400_1.jpg", "http://www.whisky.de/shop/out/pictures/generated/product/1/150_187_75/image_ARDBE1035_1.jpg");
	var counter = 0;

	$(".slider").html("<img src='" + images[counter] + "'/>");

	$(".slider").click(function() {

		var oldImage = $(this).children();
		$(oldImage).hide(1000, function() {
			$(this).remove();
		});

		counter++;

		if (counter == images.length)
			counter = 0;

		var image = images[counter];
		var div = $('<img></img>');
		div.attr("src", image);

		$(this).append(div);
		div.hide();
		div.show(1000);
	});

});
