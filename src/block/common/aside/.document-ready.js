//var url = window.location.pathname;
var toggleButton = $('[data-aside-toggle="dropdown"]');
//var url = window.location.href;
//$('.aside__nav a[href="'+url+'"]').addClass('is--active'); 
$('.aside__block').closest('body').addClass('is--aside-bottom');

toggleButton.on('click', function(e) {
	$(this).closest('.aside__block').toggleClass('open');
});