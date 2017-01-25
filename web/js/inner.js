var _cur_top;


function windowHeight() {
	var wH = $(window).height();
	var fH = $('footer').outerHeight(false);
	var total = wH - fH;

	$('.wrap-404').css({'height' : total});
}

win.resize(function() {
	doCoverImage();
	innerMenu();
	windowHeight();
	innerMenu();
	
});

$(document).ready(function() {
	doCoverImage();
	windowHeight();
	innerMenu();

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


		var _this = $(this).attr('href');

		$('.popup-content').css({'top' : _cur_top + 40});
		$(_this).addClass('active');
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
	innerMenu();
	
});

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



function innerMenu() {

	var hH = $('header').outerHeight(false);
	$('.home-menu').css({'top' : hH});

	console.log(hH)
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


