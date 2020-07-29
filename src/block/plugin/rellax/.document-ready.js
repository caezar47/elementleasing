if($(document).width() > 1200) {
	var rellax = new Rellax('.card__bg.is--reviews', {
		speed: -0.1,
		center: false,
		//wrapper: '.content-block__row',
		round: true,
		vertical: true,
		horizontal: false
	});
	var rellax = new Rellax('.card__preview.is--menedzhment', {
		speed: 0.25,
		center: false,
		wrapper: null,
		round: true,
		vertical: true,
		horizontal: false
	});
} 