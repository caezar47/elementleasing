var form_panel = $("[data-form-validation]");
var phone = $(".form__control[type='tel']");
var file = $('.form__file-input');
var file_name = $('.form__file-name');
var input = $(".form__control");
var reset = $(".form__reset");
var test = $("[data-test]");
var filter_view = $("[data-filter-view]");

var select_default = $("[data-select-default]");
var select_primary = $("[data-select-primary]");
var select_primary_l = $("[data-select-primary-l]");
var select_inline = $("[data-select-inline]");

select_default.select2({
	minimumResultsForSearch: -1,
});
select_primary.select2({
	minimumResultsForSearch: -1,
	containerCssClass: "is--primary",
	dropdownCssClass: "is--primary"
});

select_primary_l.select2({
	minimumResultsForSearch: -1,
	containerCssClass: "is--primary-light",
	dropdownCssClass: "is--primary-light"
});
select_inline.select2({
	minimumResultsForSearch: -1,
	containerCssClass: "is--inline",
	dropdownCssClass: "is--inline"
});

/*
phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
form_panel.validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
});
input.on("input", function () {
	$(this).siblings('.form__result').addClass('is--open');
	$(this).siblings('.form__clear').addClass('is--active');
});*/
file.on('change', function(e) {
    $(this).siblings('.form__file-name').html($(this).val().replace(/.*(\/|\\)/, '')+'<br> Заменить файл');
});
test.on('click', function(e) {
	e.preventDefault();
	$(this).closest('.form__panel').find('.form__result').addClass('is--visible');
	$(this).closest('.form__panel').find('.form__wrap').addClass('is--hidden');
	$(this).closest('.form__panel').find('.form__bg').addClass('is--result');
});
$('[data-form-btn]').on('click', function(e) {
	e.preventDefault();
	$(this).next('.form__panel.is--md-open').addClass('is--visible');
});
$('form button[type="submit"]').on('click', function(e) {
	e.preventDefault();
});
filter_view.on('click', function(e) {
	e.preventDefault();
	$(this).closest('.aside__filter').find('.form__checkbox.is--hidden').toggleClass('is--visible');
});
/*
$('.form__step-item').on('click', function(e) {
	e.preventDefault();
	$(this).parent('.form__step').find('.form__step-item').removeClass('is--active');
	$(this).addClass('is--active');
});
*/