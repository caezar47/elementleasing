var form_panel = $("[data-form-validation]");
var phone = $(".form__control[type='tel']");
var file = $('.form__file-input');
var file_name = $('.form__file-name');
var input = $(".form__control");
var reset = $(".form__reset");

var result = $(".form__result");

phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
form_panel.validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
}); 
/*
input.on("input", function () {
	$(this).siblings('.form__result').addClass('is--open');
	$(this).siblings('.form__clear').addClass('is--active');
});*/
file.on('change', function(e) {
    $(this).siblings('.form__file-name').html($(this).val().replace(/.*(\/|\\)/, '')+'<br> Заменить файл');
});
var btn = $("[data-test]");
btn.on('click', function(e) {
	e.preventDefault();
	$(this).closest('.form__panel').find('.form__result').addClass('is--visible');
});