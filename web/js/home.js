win.resize(function() {
	doCoverImage();
});

$(document).ready(function() {
	
});

win.load(function() {
	// preloader once done
	Pace.on('done', function() {
		// totally hide the preloader especially for IE
		setTimeout(function() {
			$('.pace-inactive').hide();
			
			$('.flexslider').flexslider({
				animation: "fade",
				directionNav: true,
				controlNav: true,
				slideshow: true,
				slideshowSpeed: 8000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    			animationSpeed: 400, 
				prevText: "&nbsp;",
				nextText: "&nbsp;",
				start: function(slider){
					doCoverImage();

					$('.home-slide').addClass('is-animated');
					setTimeout(function(){
						$('.home-slide-item').addClass('is-animated');
						$('.digital-me').addClass('is-animated');

						$(slider).find("img[data-src]").each(function () {
				          var src = $(this).attr("data-src");
				          $(this).attr("src", src).removeAttr("data-src");
				       });
					}, 300);
					
					setTimeout(function(){
						$('footer').css({'display' : 'block'});
					}, 1200);
				}
			});
		}, 500);
	});

	setTimeout(function(){
		$('.home-menu').addClass('is-anim');
		$('.home').css({'background' : '#ffffff'});
	}, 2000);

});


function doCoverImage() {	
	$('.coverimage img').each(function() {
		coverImage( $(this) );
	});
	
}

