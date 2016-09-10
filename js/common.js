$(function() {


	var toggleMenu = function() {

		var toggleButton = $('#toggle');
		var menu = $('.header-menu');

		toggleButton.on('click', function(){

			menu.toggleClass('active');

			if (toggleButton.hasClass('active')) {
				toggleButton.removeClass('active').html('&#9776;');
			} else {
				toggleButton.addClass('active').html('&#10005;');
			} 

		});

	};

	toggleMenu();


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	var wow = new WOW({  
		offset: 50,
		mobile: false    
	});
	wow.init();

	$('header a[href*=#]').bind("click", function(e) {
		var anchor = $(this);
		var $root = $('html, body');
		$root.stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();

	});

	$('.header-menu a').on('click', function(){
		if($('.header-menu').hasClass('active')){
			$('.header-menu').removeClass('active')
				$('#toggle').html('&#9776;');
		}
	});

	function resize() {
		$('.article-block p').equalHeights();
	}

	resize();

	$(window).on('resize', function(){
		resize();
	});
	

		// Animate the scroll to top
	$('.go-top').click(function() {
		var $root = $('html, body');
		$root.animate({
			scrollTop: 0
		}, 300);
	});


	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('.go-top').fadeIn(300);
		} 

		else {
			$('.go-top').fadeOut(300);
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

// function carouselB(){
// 	$(".carousel-b").owlCarousel({
//     items: 4,
//     margin: 0,
//     dots: true,
//     //autoplay: true,
//     autoplayTimeout: 3000,
//     loop: true,
//     autoplayHoverPause: true,
//     nav : false,
// 		navText : "",
//     fluidSpeed : 600,
// 		autoplaySpeed : 600,
// 		navSpeed : 600,
// 		dotsSpeed : 600,
// 		dragEndSpeed : 600,
//     //animateOut: 'fadeOut',
//     //animateIn: 'fadeIn'
//     responsive : {
//     0 : {
//         	items: 1
//     		},
//     480 : {
//         	items: 2
//     		},
//     600 : {
//     			items: 3
//     		},
//     768 : {
//         	items: 4
//     		}
// 			}
    
//   	});
// 	}


	$('.mix-controls a').on('click', function(e){
		e.preventDefault();
	});

		$('.mix-container').mixItUp({
			// callbacks: {
			// 	onMixEnd: function(){
			// 		carouselB();
			// 	}
			// }
		});


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

 });
