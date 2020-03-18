var result = $("[data-count]"),
	carousel = $('[data-carousel-count]'),
    count = $('.item', carousel).length,
    slideCarousel = function () {
        var index = $('.item.active', carousel).index()+1;
        result.html("<span>"+index+"</span><span>/</span><span>"+count+"</span>");
	};
carousel.on('slid.bs.carousel', slideCarousel).trigger('slid.bs.carousel');