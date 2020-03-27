//humb
/*
var humb = $(".navbar__hamburger"),
	toggle_navbar = humb.data("toggle-nav"),
	toggle_body = humb.data("body"),
	toggle_collapse = humb.data("collapse-nav"); 
humb.on('click',function() {				
	$(toggle_body).toggleClass("is--open-navbar");
	$(toggle_navbar).toggleClass("is--open");
	$(toggle_collapse).toggleClass("is--open");
	$(this).toggleClass("is--active");
});	*/
/*
$(document.body).on('click', function(event) {
	if($(event.target).closest('.navbar__block').length == 0){

		// $(toggle_body).removeClass("is--open-navbar");
		// $(toggle_navbar).removeClass("is--open");
		// $(toggle_collapse).removeClass("is--open");
		// humb.removeClass("is--active");
	}		
});	

var query = document.querySelector.bind(document);
var body = document.querySelector('body');

var humb = document.querySelector('[data-hamburger]');
humb.addEventListener('click',  function(e) {
	e.preventDefault();
	var collapse = query('.navbar__collapse');
	var html = query('html');
	collapse.classList.toggle('is--open');
	html.classList.toggle('is--open-navbar');
	this.classList.toggle('is--active');
});

*/
var humb = $("[data-hamburger]");
var collapse = $(".navbar__collapse");
var html = $("html");

humb.on('click',function() {	
	$(this).toggleClass("is--active");			
	$(collapse).toggleClass("is--open");
	$(html).toggleClass("is--open-navbar");
});
$(document.body).on('click', function(event) {
	if($(event.target).closest('.navbar__container.is--collapse').length == 0 && $(event.target).closest('[data-hamburger]').length == 0){	
		humb.removeClass("is--active");
		$(html).removeClass("is--open-navbar");
		$(collapse).removeClass("is--open");
	}		
});

var url = window.location.pathname;
//var url = window.location.href;
$('.navbar__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('.tabs__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('[data-azbn-toggle="dropdown"]').on('click', function(e) {
	$(".azbn-dropdown").toggleClass('open');
});	
$('.navbar-aside__dropdown [data-toggle="dropdown"]').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	$(this).parent().siblings().removeClass('open');
	$(this).parent().toggleClass('open');
});
$('.azbn__search-dropdown').on('shown.bs.dropdown', function(e) {
	$('.azbn__search-input').focus();
});


