var isScrollingAllowed = true;
var win = $(window);
var doc = $(document);

win.resize(function() {
	resize();
});

doc.ready(function() {
	smoothScroll();
	initCustomForm();
	resize();
	
	$('.header-hamburger').click(function(){
        var _this = $(this);
        $('.mobile-menu ul li').removeClass('is-open');

        $('header').toggleClass('is-open')
        $('.head-wrap').toggleClass('active');
        $('body').toggleClass('fixed');

        $('.popup-wrap').removeClass('active');
        $('.contact-tooltip').removeClass('is-active');
        setTimeout(function() {
            _this.toggleClass('active');
        }, 300);
    });

    $('.menu-w-info').click(function(e){
    	e.preventDefault();

    	$(this).closest('li').toggleClass('active').find('.menu-info-wrap').toggleClass('is-active');
    });

    // OPEN MODAL
	$('.btn-use-form').click(function(e){
		e.preventDefault();

		$('.popup-contact .popup-content').css({'top' : _cur_top + 40});
		$('.popup-contact').addClass('active');
		$('.contact-tooltip').removeClass('is-active');
	});	

	// ClOSE MODAL
	$('.pop-close, .bg-close').click(function(e){
		e.preventDefault();
		$('.popup-wrap').removeClass('active');

	});

	$('.contact-t-wrap .pop-close').click(function(e){
		e.preventDefault();
		$(this).closest('.contact-tooltip').removeClass('is-active');
	});

    // if($(window).width() > 768 ) {
    // 	$('.animated').appear(function() {
	   //      var element = $(this);
	   //      var animation = element.data('animation');
	   //      var animationDelay = element.data('delay');
	   //      if(animationDelay) {
	   //        setTimeout(function(){
	   //            element.addClass( animation + " visible" );
	   //            element.removeClass('hiding');
	   //        }, animationDelay);
	   //      } else {
	   //        element.addClass( animation + " visible" );
	   //        element.removeClass('hiding');
	   //      }               
	   //  }, {accY: -90});
    // } else {
    // 	$('.hiding').css({'opacity' : '1'});
    // }
    
    
});

win.load(function() {
	resize();
	// preloader once done
	Pace.on('done', function() {
		// totally hide the preloader especially for IE
		setTimeout(function() {
			$('.pace-inactive').hide();
			$('header').addClass('is-anim');

			//$('.preloader').remove();
				
		}, 500);
	});
});

$(window).on('scroll load', function(){
    _cur_top = $(window).scrollTop();


});

//get all elements with class and get the biggest box
function get_biggest(elements){
	var biggest_height = 0;
	for ( var i = 0; i < elements.length ; i++ ){
		var element_height = $(elements[i]).height();
		//compare the height, if bigger, assign to variable
		if(element_height > biggest_height ) biggest_height = element_height;
	}
	return biggest_height;
}

function initCustomForm() {
    $('select.custom-select').each(function() {
        $(this).wrap('<div class="custom-select-wrapper" />');
        $(this).before('<div class="custom-select-display" />');
        $(this).change(function() {
            $(this).siblings('.custom-select-display').text( $(this).find('option:selected').text() );
        });
        $(this).keyup(function() {
            $(this).siblings('.custom-select-display').text( $(this).find('option:selected').text() );
        });
        $(this).change();
    });
}

function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	// STICKY FOOTER
	var headerHeight = $('header').outerHeight();
	var footerHeight = $('footer').outerHeight();
	var footerTop = (footerHeight) * -1
	//$('footer').css({marginTop: footerTop});
	//$('#main-wrapper').css({paddingBottom: footerHeight});

	// for vertically middle content
	$('.bp-middle').each(function() {
		var bpMiddleHeight = $(this).outerHeight() / 2 * - 1;
		$(this).css({marginTop: bpMiddleHeight});
	});

	// for equalizer
	$('.classname').css({minHeight: 0});
  	var ClassName = get_biggest($('.classname'));
  	$('.classname').css({minHeight: ClassName});

  	var hsHeight = windowHeight - footerHeight - $('.home-menu').outerHeight(false);

  	$('.home-slide, .coverimage, .home-slide .table-wrap').css({'height' :  hsHeight});
}

function coverImage( image ) {

	var imgObj = image;
	var iW = imgObj.attr('width');//width(); //width of image ratio
	var iH = imgObj.attr('height');//.height(); //height of image ratio

	imgObj.width(0).height(0);
	
	var imgContainer = image.parent();
	var cW = imgContainer.width(); //width of container or browser
	var cH = imgContainer.height(); //height of container or browser

	//console.log(iW,iH,cW,cH);

	if ( cH > 1 ) {
		var cP = cW/cH; //ratio of container or browser
		var iP = iW/iH; //ratio of image

		if ( iP > cP ) { //if image ratio is more than container ratio (if image width is more than container width)
			iH = cH; //set image height from container height
			iW = cH * iP; //set image width using container height and image ratio
			imgObj.css({
				'margin-top': 0,
				'margin-left': Math.ceil((cW-iW)/2),
				'width': Math.ceil(iW),
				'height': Math.ceil(iH)
			}); //center the image and set dimensions
		} else { //if image ratio is less than container ratio (if image height is more than container height)
			iW = cW; //set image width from container width
			iH = cW / iP; //set image height from container width and ratio
			imgObj.css({
				'margin-top': Math.ceil((cH-iH)/2),
				'margin-left': 0,
				'width': Math.ceil(iW),
				'height': Math.ceil(iH)
			}); //center the image and set dimensions
		}
	} else {
		imgObj.css({
			'margin-top': 0,
			'margin-left': 0,
			'width': 'auto',
			'height': 'auto'
		});
	}
}

// SMOOTH SCROLL
function smoothScroll() {
    var scrollTime = 0.7;
    var scrollDistance = 150;

    $(window).on("mousewheel DOMMouseScroll", function(event) {
        event.preventDefault();
        if (isScrollingAllowed) {

            // var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
            var delta = ( Math.abs(event.originalEvent.wheelDelta) < 120 ? event.originalEvent.wheelDelta / 6 : event.originalEvent.wheelDelta / 120 ) || -event.originalEvent.detail;
            var scrollTop = win.scrollTop();
            var finalScroll = scrollTop - parseInt(delta * scrollDistance);

            TweenMax.to(win, scrollTime, {
                scrollTo: { y: finalScroll, autoKill: true },
                ease: Power1.easeOut,
                autoKill: true,
                overwrite: 5
            });
        }
    });

}


