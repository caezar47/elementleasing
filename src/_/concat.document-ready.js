var toggleButton=$('[data-aside-toggle="dropdown"]');$(".aside__block").closest("body").addClass("is--aside-bottom"),toggleButton.on("click",function(o){o.preventDefault(),o.stopPropagation(),$(this).closest(".aside__block").toggleClass("open")});
var mapYA=$("#yandex_map");function init(){for(var a=(a=$("[data-map-base]").attr("data-c")).split(" "),p=new ymaps.Map("yandex_map",{center:a,zoom:16,controls:[]}),t=$("[data-coord]"),e=0;e<t.length;e++){var d=(d=t[e].dataset.c).split(" "),n=(t[e].dataset.addr,new ymaps.GeoObject({geometry:{type:"Point",coordinates:d}},{preset:"islands#blueStretchyIcon"}));p.geoObjects.add(n)}t.click(function(a){a.preventDefault();var t=(t=$(this).attr("data-c")).split(" "),e=$(this).attr("data-addr"),d=$(this).attr("data-city"),n=$(this).attr("data-email"),i=$(this).attr("data-clock");$("#yandex_map").find("[data-map-heading]").text(d),$("#yandex_map").find("[data-map-address]").text(e),$("#yandex_map").find("[data-map-email]").text(n),$("#yandex_map").find("[data-map-clock]").text(i),p.setCenter(t,16),$("html, body").animate({scrollTop:$("#yandex_map").offset().top-111},777)})}0<mapYA.length&&ymaps.ready(init);
var form_panel=$("[data-form-validation]"),phone=$(".form__control[type='tel']"),file=$(".form__file-input"),file_name=$(".form__file-name"),input=$(".form__control"),reset=$(".form__reset"),btn=$("[data-test]"),filter_view=$("[data-filter-view]");phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),form_panel.validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1}),file.on("change",function(e){$(this).siblings(".form__file-name").html($(this).val().replace(/.*(\/|\\)/,"")+"<br> Заменить файл")}),btn.on("click",function(e){e.preventDefault(),$(this).closest(".form__panel").find(".form__result").addClass("is--visible")}),filter_view.on("click",function(e){e.preventDefault(),$(this).closest(".aside__filter").find(".form__checkbox.is--hidden").toggleClass("is--visible")});
$("img").addClass("img-responsive");
var modal_btn_show=$('[data-toggle="modal"]');modal_btn_show.on("click",function(a){var t=$(this).attr("data-target"),d=$(t).find("[data-modal-heading]"),n=$(this).attr("data-modal-heading"),i=$(t).find("[data-modal-heading-small]"),l=$(this).attr("data-modal-heading-small"),e=$(t).find("[data-form-heading]"),h=$(t).find("[data-btn-heading]"),o=$(this).attr("data-btn-heading");d.text(n),i.text(l),e.attr({value:n}),h.text(o)});
var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")}),$('.navbar-aside__dropdown [data-toggle="dropdown"]').on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".azbn__search-dropdown").on("shown.bs.dropdown",function(a){$(".azbn__search-input").focus()});
$(".text__block table").addClass("table").wrap('<div class="table-responsive"></div>'),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled");
var $range=$(".js-range-slider");$range.ionRangeSlider({step:1});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),e=$(o.attr("href")).eq(0),s=parseInt(o.attr("data-scrollto-diff"))||0,l=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:e.offset().top+s},l),$('[data-scrollto="nav-item"]').removeClass("is--active"),o.parent().addClass("is--active")}),$(document.body).on("click",'[data-scrollto="navbar"].is--open .scrollto',{},function(t){(screenJS.isXS()||screenJS.isSM()||screenJS.isMD())&&(t.preventDefault(),$('[data-scrollto="humb"]').trigger("click"))});
"use strict";$(function(){var s=$("[data-slick-catalog]"),o=$('[data-slider-slick="slick-header"]'),e=$('[data-slider-slick="slick-gallery"]'),t='<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',i='<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';s.slick({slidesToShow:4,slidesToScroll:1,arrows:!1,dots:!1,infinite:!1,prevArrow:t,nextArrow:i,responsive:[{breakpoint:768,settings:"unslick"}]}),o.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1,dots:!1,autoplay:!0,autoplaySpeed:4e3,fade:!0}),e.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!0,infinite:!0,prevArrow:t,nextArrow:i,responsive:[{breakpoint:1600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{dots:!1,slidesToShow:1,slidesToScroll:1}}]}),$(".slick-cloned .content-block__preview").removeAttr("data-fancybox"),$(".slick-cloned .card-item__preview").removeAttr("data-fancybox")});
