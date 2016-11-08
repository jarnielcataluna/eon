win.resize(function() {
	doCoverImage();
});

$(document).ready(function() {
	doCoverImage();

	$('.featured-lifehack .flexslider').flexslider({
		animation: "fade",
		directionNav: false,
		controlNav: true,
		slideshow: true,
		animationSpeed: 400, 
		prevText: "&nbsp;",
		nextText: "&nbsp;"
	});
});

win.load(function() {
	// preloader once done


	Pace.on('done', function() {
		// totally hide the preloader especially for IE
		setTimeout(function() {
			$('.pace-inactive').hide();
		}, 500);
	});

	setTimeout(function(){
		$('.home-menu').addClass('is-anim');
	}, 2000);
});

function doCoverImage() {	
	$('.inner-banner img').each(function() {
		coverImage( $(this) );
	});
	
}


