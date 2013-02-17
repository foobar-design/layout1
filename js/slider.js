$(document).ready(function() {

	
 	 var images = new Array("http://www.whisky.de/shop/out/pictures/generated/product/1/150_187_75/image_BUNNA12NE_1.jpg", "http://www.whisky.de/shop/out/pictures/generated/product/1/150_187_75/image_SPRIN1000_1.jpg", "http://www.whisky.de/shop/out/pictures/generated/product/1/150_187_75/image_BRIAC00BI_1.jpg", "http://www.whisky.de/shop/out/pictures/generated/product/1/150_187_75/image_ARRAN1400_1.jpg", "http://www.whisky.de/shop/out/pictures/generated/product/1/150_187_75/image_ARDBE1035_1.jpg");
	/*
	var images = new Array("http://www.hd-gbpics.de/gbbilder/katzen/katzen2.jpg","http://www.designnation.de/Media/Galerie/49cf5c21b40d2,Katzen.jpg","http://www.tu-chemnitz.de/phil/leo/bilder_neu/katzen.jpg");
	*/
	var counter = 0;

	$(".slider").children("img").remove();
	$(".slider").html("<img src='" + images[counter] + "'/>");

	$(".slider").click(function() {

		var oldImage = $(this).children("img");

		$(oldImage).css({"opacity" : "0.6"});
		$(oldImage).animate({
			opacity : 0.25,
			right : '+=100'
		}, 1100, function() {
			$(oldImage).remove();
		});

		counter++;
		if (counter == images.length)
			counter = 0;
			

			
		var newImage = images[counter];
 		var img = $('<img></img>');
		$(img).attr("src", newImage);
		$(img).css({"right" : "820px", "opacity" : "0.0"});
		$(img).animate({
			opacity : "1",
			right : '+=150'
		}, 1500);
		$(".slider").append(img);
		
		
		
		
				

		/*
		 $(oldImage).fadeOut("slow", function() {
		 $(this).remove();

		 counter++;

		 if (counter == images.length)
		 counter = 0;

		 var div = $('<img></img>');
		 div.attr("src", image);

		 $(".slider").append(div);
		 div.hide();
		 div.fadeIn(1000);

		 $(".status2").html(image);

		 });

		 */

	});

});
