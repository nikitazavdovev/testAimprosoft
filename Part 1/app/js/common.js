$(function() {
	$('.products-slider').slick({
		centerMode: true,
		centerPadding: '75px',
		mobileFirst: true,
		arrows: false,
		slidesToShow: 1,
		responsive: [
		  {
			breakpoint: 575,
			settings: {
			  arrows: false,
				centerPadding: '40px',
			  centerMode: true,
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 767,
			settings: {
			  arrows: true,
			  centerMode: true,
				centerPadding: '50px',
				slidesToShow: 4,
			}
		  },
		  {
			breakpoint: 991,
			settings: {
			  arrows: true,
			  centerMode: false,
			  centerPadding: '50px',
			  slidesToShow: 5
			}
		  },
		  {
			breakpoint: 1199,
			settings: {
			  arrows: true,
			  centerMode: false,
			  slidesToShow: 6
			}
		  },
		]
	});

	$('.instagram-carousel').slick({
		centerMode: true,
		centerPadding: '85px',
		mobileFirst: true,
		arrows: false,
		slidesToShow: 1,
		responsive: [
		  {
			breakpoint: 575,
			settings: {
			  arrows: false,
				centerPadding: '50px',
			  centerMode: true,
			  slidesToShow: 3
			}
			},
		  {
			breakpoint: 767,
			settings: "unslick"
		  },
		]
	});

	$('.users-carousel').slick({
		centerMode: true,
		centerPadding: '65px',
		mobileFirst: true,
		arrows: false,
		slidesToShow: 1,
		responsive: [
		  {
			breakpoint: 575,
			settings: {
			  arrows: false,
				centerPadding: '12px',
			  centerMode: true,
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 767,
			settings: "unslick"
		  },
		]
	});

	//Instagram and Users blocks hover effects
	$('.instagram-carousel__img').on('mouseenter', function(){
		$(this).append("<div class='instagram-carousel__img_likes'><i class='fas fa-heart'></i><p>1.323 likes</p></div>")
	}).on('mouseleave', function(){
		$('.instagram-carousel__img_likes').remove()
	});
	$('.users-carousel__img').on('mouseenter', function(){
		$(this).append("<div class='users-carousel__img_name'><p>Custom Name</p></div>")
	}).on('mouseleave', function(){
		$('.users-carousel__img_name').remove()
	});

	//Menu animation

	//Open
	$('.menu-content-bars').on("click", function() {
		$('.menu-links').animate({left: 0})
	});

	//Close
	$('.menu-links-header-title__close').on("click", function() {
		$('.menu-links').animate({left: "-100%"})
	});

	//Items open/close
	$('.menu-links-categories-item').on("click", function() {
		$(this).find('.menu-links-categories-item-content__button').toggleClass('clicked');
		// $('.menu-links-categories-item-subs').toggle({display: 'none'});
		$(this).children('.menu-links-categories-item-subs').toggle("fast")
	});

	//Cart animation
	$('.menu-content-right-cart').on("click", function() {
		$('.menu-cart').animate({height: "620px"})
	});

	$('.menu-cart-footer__continue').on("click", function() {
		$('.menu-cart').animate({height: "0px"})
	});
});
