var url = window.location.pathname;
//var url = window.location.href;
$('.aside__nav a[href="'+url+'"]').addClass('is--active'); 
$('.aside__block').closest('body').addClass('is--aside-bottom'); 