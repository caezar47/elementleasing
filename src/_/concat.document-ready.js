var result=$("[data-count]"),carousel=$("[data-carousel-count]"),count=$(".item",carousel).length,slideCarousel=function(){var a=$(".item.active",carousel).index()+1;result.html("<span>"+a+"</span><span>/</span><span>"+count+"</span>")};carousel.on("slid.bs.carousel",slideCarousel).trigger("slid.bs.carousel");var btn=$("[data-dropdown-btn]");btn.on("click",function(a){a.preventDefault(),$(this).closest(".card__item").find("[data-dropdown]").toggleClass("is--active")});
var toggleButton=$('[data-aside-toggle="dropdown"]');$(".aside__block").closest("body").addClass("is--aside-bottom"),toggleButton.on("click",function(o){o.preventDefault(),o.stopPropagation(),$(this).closest(".aside__block").toggleClass("open")});
var dropdown=$(".dropdown__card"),dropdown_link=$(".dropdown__nav-link");dropdown_link.click(function(d){d.preventDefault(),$(this).closest(".dropdown__nav").find(".dropdown__nav-link").removeClass("is--active"),$(this).closest(dropdown).find(".dropdown__toggle").text($(this).text()),$(this).addClass("is--active")});
var form_panel=$("[data-form-validation]"),phone=$(".form__control[type='tel']"),file=$(".form__file-input"),file_name=$(".form__file-name"),input=$(".form__control"),reset=$(".form__reset"),test=$("[data-test]"),filter_view=$("[data-filter-view]"),select_default=$("[data-select-default]"),select_primary=$("[data-select-primary]"),select_primary_l=$("[data-select-primary-l]"),select_inline=$("[data-select-inline]");select_default.select2({minimumResultsForSearch:-1}),select_primary.select2({minimumResultsForSearch:-1,containerCssClass:"is--primary",dropdownCssClass:"is--primary"}),select_primary_l.select2({minimumResultsForSearch:-1,containerCssClass:"is--primary-light",dropdownCssClass:"is--primary-light"}),select_inline.select2({minimumResultsForSearch:-1,containerCssClass:"is--inline",dropdownCssClass:"is--inline"}),file.on("change",function(e){$(this).siblings(".form__file-name").html($(this).val().replace(/.*(\/|\\)/,"")+"<br> Заменить файл")}),test.on("click",function(e){e.preventDefault(),$(this).closest(".form__panel").find(".form__result").addClass("is--visible"),$(this).closest(".form__panel").find(".form__wrap").addClass("is--hidden"),$(this).closest(".form__panel").find(".form__bg").addClass("is--result")}),$("[data-form-btn]").on("click",function(e){e.preventDefault(),$(this).next(".form__panel.is--md-open").addClass("is--visible")}),$('form button[type="submit"]').on("click",function(e){e.preventDefault()}),filter_view.on("click",function(e){e.preventDefault(),$(this).closest(".aside__filter").find(".form__checkbox.is--hidden").toggleClass("is--visible")});
$("img").addClass("img-responsive");
var mapYA=$("#yandex_map");function init(){for(var t=(t=$("[data-map-base]").attr("data-c")).split(" "),s=new ymaps.Map("yandex_map",{center:t,zoom:16,controls:[]}),a=$("[data-coord]"),e=$("[data-scrollto]"),d=0;d<a.length;d++){var o=(o=a[d].dataset.c).split(" "),i=(a[d].dataset.addr,new ymaps.GeoObject({geometry:{type:"Point",coordinates:o}},{preset:"islands#blueStretchyIcon"}));s.geoObjects.add(i)}a.click(function(t){t.preventDefault();var a=(a=$(this).attr("data-c")).split(" "),e=$(this).attr("data-addr"),d=$(this).attr("data-city"),o=$(this).attr("data-email"),i=$(this).attr("data-clock");$(".map__block").find("[data-map-heading]").text(d),$(".map__block").find("[data-map-address]").text(e),$(".map__block").find("[data-map-email]").text(o),$(".map__block").find("[data-map-clock]").text(i),s.setCenter(a,16),$(this).closest(".dropdown__nav").find(".dropdown__nav-link").removeClass("is--active"),$(this).closest(".dropdown__card").find(".dropdown__toggle").text($(this).text()),$(this).addClass("is--active")}),e.click(function(t){t.preventDefault(),$("html, body").animate({scrollTop:$(".map__block").offset().top-111},777)})}0<mapYA.length&&ymaps.ready(init);

var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")}),$('.navbar-aside__dropdown [data-toggle="dropdown"]').on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".azbn__search-dropdown").on("shown.bs.dropdown",function(a){$(".azbn__search-input").focus()});
$("#next").on("click",function(){var a=$(".tabs__pane.active"),e=a.next();e.length&&(a.removeClass("active"),e.addClass("active"))}),$("#prev").on("click",function(){var a=$(".tabs__pane.active"),e=a.prev();e.length&&(a.removeClass("active"),e.addClass("active"))});
$(".text__block table").addClass("table").wrap('<div class="table-responsive"></div>'),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled");
"use strict";$(function(){var s=$("[data-slick-header]"),o=$("[data-slick-catalog]"),i=$("[data-slick-partners]"),t=$("[data-slick-finance]"),e=$("[data-slick-leasing]"),n=$("[data-slick-adv]"),l=$("[data-slick-dots]").data("slick-dots"),a='<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',r='<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>',d=$(".slick-count");s.on("init reInit afterChange",function(s,o,i,t){var e=(i||0)+1;$(this).find(d).html("<span>"+e+"</span><span>/</span><span>"+o.slideCount+"</span>")}),s.slick({slide:".content-block__slider-slide",slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!0,dots:!1,autoplay:!0,autoplaySpeed:4e3,prevArrow:a,nextArrow:r,fade:!0}),n.slick({slide:".content-block__slider-slide",slidesToShow:1,slidesToScroll:1,prevArrow:a,nextArrow:r,fade:!0,customPaging:function(s,o){$(s.$slides[o]).find("[data-thumb]").data("thumb");return"<a>"+$(s.$slides[o]).data("thumb")+"</a>"},responsive:[{breakpoint:3e3,settings:{arrows:!1,dots:!0}},{breakpoint:991,settings:{dots:!1,arrows:!0}}]}),o.slick({slidesToShow:2,slidesToScroll:2,arrows:!1,dots:l,infinite:!1,prevArrow:a,nextArrow:r,responsive:[{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}),e.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,infinite:!1,responsive:[{breakpoint:3e3,settings:"unslick"},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]}),t.slick({slidesToShow:4,slidesToScroll:1,arrows:!0,dots:l,infinite:!1,prevArrow:a,nextArrow:r,responsive:[{breakpoint:991,settings:{slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),i.slick({slidesToShow:5,slidesToScroll:1,arrows:!1,dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:768,settings:{slidesToShow:3}}]})});