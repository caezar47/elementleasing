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

phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
/*
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

var navListItems = $('.form__step-link'),
      allWells = $('.form__step-pane'),
      allNextBtn = $('[data-step-next]'),
      allResultBtn = $('[data-step-finish]');

allWells.hide();
navListItems.click(function (e) {
	e.preventDefault();
	var $target = $($(this).attr('href')),
	    $item = $(this);

	if (!$item.attr('disabled')) {
		$item.closest('.form__wrap').find(navListItems).removeClass('is--active');
		$item.addClass('is--active');
		$item.closest('.form__wrap').find(allWells).hide();
		$target.show();
		$target.find('input:eq(0)').focus();
	}
});

allNextBtn.click(function(){
	var curStep = $(this).closest(".form__step-pane"),
		curStepBtn = curStep.attr("id"),
		nextStepWizard = $('.form__step-link[href="#' + curStepBtn + '"]').parent().next().children("a"),
		curInputs = curStep.find("input,select"),
		isValid = true;

	$(".form__item").removeClass("is--error");
	for(var i=0; i<curInputs.length; i++){
		if (!curInputs[i].validity.valid){
			isValid = false;
			$(curInputs[i]).closest(".form__item").addClass("is--error");
		}		
	}
	if (isValid)
		nextStepWizard.removeAttr('disabled').trigger('click');
});
allResultBtn.click(function(){
	var curStep = $(this).closest(".form__step-pane"),
		curStepBtn = curStep.attr("id"),
		nextStepWizard = $('.form__step-link[href="#' + curStepBtn + '"]').parent().next().children("a"),
		curInputs = curStep.find("input,select"),
		isValid = true;

	$(".form__item").removeClass("is--error");
	for(var i=0; i<curInputs.length; i++){
		if (!curInputs[i].validity.valid){
			isValid = false;
			$(curInputs[i]).closest(".form__item").addClass("is--error");
		}		
	}
	if (isValid){
		$(this).closest('.form__panel').find('.form__result').addClass('is--visible');
		$(this).closest('.form__panel').find('.form__wrap').addClass('is--hidden');
		$(this).closest('.form__panel').find('.form__bg').addClass('is--result');
	}

});

$('.form__step-link:not([disabled])').trigger('click');
