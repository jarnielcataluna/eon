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

	// ClOSE MODAL
	$('.pop-close, .bg-close').click(function(e){
		e.preventDefault();
		$('.popup-wrap').removeClass('active');
	});

	// FAQ TABS
	$('.faq-categ-wrap a').click(function(){
		var _this = $(this).attr('href');
		
		$('.faq-categ-wrap li').removeClass('active');
		$('.faq-categ-content').css({'display': 'none'});
		$(this).closest('li').addClass('active');
		$(_this).css({'display' : 'block'});
	});
	
	$('.fc-question').click(function(){
		$(this).closest('li').toggleClass('active');
		$(this).closest('li').find('.fc-answer').stop(true, false).slideToggle(300);
	});

	// OPEN MODAL
	$('.btn-modal').click(function(e){
		e.preventDefault();

		$('.popup-content').css({'top' : _cur_top + 40});
		$('.popup-wrap').addClass('active');
	});	

	// CO CREATE FORM
	$('.btn-co-create').click(function(e){
		e.preventDefault();
		$(this).hide(300);
		$('#photoupload-form').stop(true, false).slideDown(300);
	});

	$('.btn-close-form').click(function(e){
		e.preventDefault();
		$('#photoupload-form').stop(true, false).slideUp(300);
		setTimeout(function(){
			$('.btn-co-create').show();
		}, 300);
		
	});

	// CO CREATE ADD SOCIAL MEDIA

	$('#add-social-checkbox').change(function(){


        if( $('#add-social-checkbox').is(':checked')) {
        	$('.cf-add-accounts').stop(true, false).slideDown(300);
        } else {
            $('.cf-add-accounts').stop(true, false).slideUp(300);
        }

    });

    $('.animated').appear(function() {
        var element = $(this);
        var animation = element.data('animation');
        var animationDelay = element.data('delay');
        if(animationDelay) {
          setTimeout(function(){
              element.addClass( animation + " visible" );
              element.removeClass('hiding');
          }, animationDelay);
        } else {
          element.addClass( animation + " visible" );
          element.removeClass('hiding');
        }               
    }, {accY: -90});
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

function limitText(limitField, limitCount, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } else {
        limitCount.value = limitNum - limitField.value.length;
    }
}


