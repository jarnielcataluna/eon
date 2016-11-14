var _cur_top;

win.resize(function() {
	doCoverImage();
	innerMenu();
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

	$('.testi-flex .flexslider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		smoothHeight: true,
		slideshow: true,
		animationSpeed: 400, 
		prevText: "&nbsp;",
		nextText: "&nbsp;"
	});

	$('.pop-close, .bg-close').click(function(e){
		e.preventDefault();
		$('.popup-wrap').removeClass('active');
	});

	$('.btn-modal').click(function(e){
		e.preventDefault();

		$('.popup-content').css({'top' : _cur_top + 40});
		$('.popup-wrap').addClass('active');
	});	
});

win.load(function() {
	// preloader once done


	Pace.on('done', function() {
		// totally hide the preloader especially for IE
		setTimeout(function() {
			$('.pace-inactive').hide();
			innerMenu();

		}, 500);
	});

	setTimeout(function(){
		$('.home-menu').addClass('is-anim');
	}, 2000);
});



$(window).on('scroll load', function(){
    _cur_top = $(window).scrollTop();


});


function innerMenu() {

	var hH = $('header').outerHeight(false);

	$('.home-menu').css({'top' : hH});
}

function doCoverImage() {	
	$('.inner-banner img').each(function() {
		coverImage( $(this) );
	});
	
}


