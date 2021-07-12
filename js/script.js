$(document).ready(function(){

  $('.why-do-slider').slick({
  	slidesToShow: 2,
  	vertical: true,
  	dots: true,
  	appendArrows: $('.why-do-slider-nav'),
  	appendDots: $('.why-do-slider-nav'),
  	prevArrow: '<button class="slick-prev slick-arrow"><i class="fa fa-angle-up" aria-hidden="true"></i></button>',
	nextArrow: '<button class="slick-next slick-arrow"><i class="fa fa-angle-down" aria-hidden="true"></i></button>',
	infinite: true,

	// autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
    {
      breakpoint: 993,
      settings: {
        // vertical: false,
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 670,
      settings: {
      	vertical: false,
        slidesToShow: 1,
        prevArrow: '<button class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow: '<button class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
      }
    }
    ],


  });

   $('.slider-posts-body').slick({
  	slidesToShow: 3,
  	dots: true,
  	appendArrows: $('.slider-posts-nav'),
  	appendDots: $('.slider-posts-nav'),
  	prevArrow: '<button class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	nextArrow: '<button class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	infinite: true,
	adaptiveHeight: true,
	responsive: [
	{
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 1,
      }
    }
    ],
  });

	if (+document.body.clientWidth <= 1020) {
	    $('.slider-adapt').slick({
	  	slidesToShow: 1,
	  	dots: true,
	  	appendArrows: $('.can-you-do_blocks-nav'),
	  	appendDots: $('.can-you-do_blocks-nav'),
	  	prevArrow: '<button class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow: '<button class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		infinite: true,
	  });
	}


   $(window).scroll(function(){
        if($(this).scrollTop()>140){
            $('#fixid-head').addClass('fixed');
        }
        else if ($(this).scrollTop()<140){
            $('#fixid-head').removeClass('fixed');
        }
    });

   // плавное перемещение страницы к нужному блоку 
	$(".navbar-nav li a").click(function () { 
		elementClick = $(this).attr("href"); 
		destination = $(elementClick).offset().top; 
		$("body,html").animate({scrollTop: destination }, 800); 
	});
	$(".nav-mobile li a").click(function () { 
		$('#mobile-menu').stop().animate({right:"-100%"},500);
		elementClick = $(this).attr("href"); 
		destination = $(elementClick).offset().top; 
		$("body,html").animate({scrollTop: destination }, 800); 
	});
	
	$('.menu-btn').click(function() {
		$('#mobile-menu').stop().animate({right:"0"},500);
	});
	$('.mobile-menu-remove').click(function() {
		$('#mobile-menu').stop().animate({right:"-100%"},500);
	});
	



});