$(function() {

	var $mainBody = $('body');
	var $menu = $('.header-menu');
	var toggleButton = $('#toggle');

	function toggleMenu() {

		toggleButton.bind('click', function(){

			$mainBody.css('overflow', 'hidden');

			$menu.toggleClass('active');
			$mainBody.addClass('js-nav-open');

			if (toggleButton.hasClass('active')) {
				toggleButton.removeClass('active');
			} else {
				toggleButton.addClass('active');
			} 

		});

	};

	toggleMenu();

	$(window).on("click", function(e) {
		if (
			$mainBody.hasClass("js-nav-open") && 
			!$(e.target).parents($menu).hasClass("active") && !$(e.target).hasClass("active")) {
			$menu.removeClass("active");
		toggleButton.removeClass('active');
		$mainBody.css('overflow', 'auto');
	}
});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	var wow = new WOW({
		mobile: false    
	});

	wow.init();

	function smoothScroll (duration) {
		$('header a[href^="#"]').on('click', function(event) {

			var target = $( $(this).attr('href') );

			if( target.length ) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, duration);
			}
		});
	}

	smoothScroll(800);


	$('.header-menu a').on('click', function(){
		if($('.header-menu').hasClass('active')){
			$('.header-menu').removeClass('active')
				// $('#toggle').html('&#9776;');
		};
		$mainBody.css('overflow', 'auto');
	});

	function onResize() {
		$('.article-block p').equalHeights();
		$('.member img').equalHeights();
	}

	onResize();

	$(window).on('resize', function(){
		onResize();
	});
	

	// Animate the scroll to top
	$('.go-top').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop : 0}, 800);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('.go-top').fadeIn();
		} else {
			$('.go-top').fadeOut();
		}
	});

	
$(".carousel-a").owlCarousel({
    items: 5,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    autoplayHoverPause: true,
    nav : true,
		navText : "",
    fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600,
    //animateOut: 'fadeOut',
    //animateIn: 'fadeIn'
    responsive : {
    0 : {
        items: 1
    },
    480 : {
        items: 2
    },
    600 : {
    		items: 3
    },
    768 : {
        items: 4
    	},
    992 : {
        items: 5
    	}	
		}
    
  });


	$('.mix-controls a').on('click', function(e){
		e.preventDefault();
	});

	$('.mix-container').mixItUp();

	$(".quote-wrap").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    autoplayHoverPause: true,
    nav : false,
		navText : "",
    fluidSpeed : 600,
		autoplaySpeed : 600,
		mouseDrag: false,
		touchDrag: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
    
  });

	$(".carousel-c").owlCarousel({
    items: 3,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    autoplayHoverPause: true,
    nav : true,
		navText : "",
    fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600,
    responsive : {
    0 : {
        items: 1
    },
    480 : {
        items: 1
    },
    600 : {
    		items: 2
    },
    992 : {
    		items: 3
    }
		}
    
  });

  $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		tLoading: '',
		fixedContentPos: true,
		mainClass: 'mfp-no-margins', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		}
	});

  $('.btn-send').on('click', function(e) {
  	$(this).toggleClass('clicked');
  	$('.btn-send span').text(function(i, text) {
  		return text === "Sent!" ? "Send" : "Sent!";
  	});
  	e.preventDefault();
  });

  function memberJiggle() {
  	var randNum = Math.floor(Math.random() * $('.member').length);
		
  	$('.member').eq(randNum).find('img').addClass('jiggle')
  		.parent().siblings().find("img").removeClass('jiggle');
		
  }

  if (window.matchMedia("(min-width: 480px)").matches) {
  	setInterval(function(){memberJiggle()}, 1000);
  	animNumbers()
  };

  	// Counter 

  	function animNumbers(){

  		$(".facts").waypoint(function() {

  			$({blurRadius: 5}).animate({blurRadius: 0}, {
  				duration: 1200,
  				easing: 'swing',
  				step: function() {
  					$(".js-counter").css({
  						"-webkit-filter": "blur("+this.blurRadius+"px)",
  						"filter": "blur("+this.blurRadius+"px)"
  					});
  				}
  			});
  			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
  			$(".js-counter").each(function() {
  				var tcount = $(this).data("count");
  				$(this).animateNumber({ number: tcount,
  					easing: 'linear',
  					numberStep: comma_separator_number_step},
  					1200);
  			});
  			this.destroy();

  		});
  	};
	

  	$('.js-counter').each(function(){
  		var count = $(this).data("count");
  		$(this).text(count);
  	});

 });
