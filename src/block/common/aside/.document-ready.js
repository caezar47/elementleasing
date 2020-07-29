var toggleButton = $('[data-aside-toggle="dropdown"]');
$('.aside__block.is--bottom').closest('body').addClass('is--aside-bottom');

toggleButton.on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	$(this).closest('.aside__block').toggleClass('open');
	$('html').toggleClass("is--open-aside");
});