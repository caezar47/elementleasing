'use strict';
$(function() { 
	var catalog = $('[data-slick-catalog]');
	var partners = $('[data-slick-partners]');
	var dots = $('[data-slick-dots]').data('slick-dots');
	console.log(dots);

	var header = $('[data-slider-slick="slick-header"]');	
	var gallery = $('[data-slider-slick="slick-gallery"]');	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
	//var CMS__TPL_PATH = '/tpl';  
	var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';	
	
	catalog.slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		dots: dots,
		infinite: false,
		//centerMode: true,
  		//centerPadding: '60px',
		//infinite: true,
		//autoplay: true,
  		//autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 768,				
		      	settings: "unslick"
		    }
		]
	});

	partners.slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 4000,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
		    }
		]
	});

	/*window.addEventListener("resize", function() {
	  if (window.innerWidth <= 768) {
	    catalog.slick('unslick');
	    sliderIsLive = false;
	  }
	  else {
	    if (sliderIsLive) {
	      catalog.slick();
	      sliderIsLive = true;
	    }
	  }
	});*/

	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: false,
		autoplay: true,
  		autoplaySpeed: 4000,
		//prevArrow: prevArrow,
		//nextArrow: nextArrow,
		fade: true
	});
	gallery.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});

	
	$('.slick-cloned .content-block__preview').removeAttr('data-fancybox');
	$('.slick-cloned .card-item__preview').removeAttr('data-fancybox');
}); 