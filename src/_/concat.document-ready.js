var result=$("[data-count]"),carousel=$("[data-carousel-count]"),count=$(".item",carousel).length,slideCarousel=function(){var s=$(".item.active",carousel).index()+1;result.html("<span>"+s+"</span><span>/</span><span>"+count+"</span>")};carousel.on("slid.bs.carousel",slideCarousel).trigger("slid.bs.carousel");
var toggleButton=$('[data-aside-toggle="dropdown"]');$(".aside__block").closest("body").addClass("is--aside-bottom"),toggleButton.on("click",function(o){o.preventDefault(),o.stopPropagation(),$(this).closest(".aside__block").toggleClass("open")});
var mapYA=$("#yandex_map");function init(){for(var a=(a=$("[data-map-base]").attr("data-c")).split(" "),p=new ymaps.Map("yandex_map",{center:a,zoom:16,controls:[]}),t=$("[data-coord]"),e=0;e<t.length;e++){var d=(d=t[e].dataset.c).split(" "),n=(t[e].dataset.addr,new ymaps.GeoObject({geometry:{type:"Point",coordinates:d}},{preset:"islands#blueStretchyIcon"}));p.geoObjects.add(n)}t.click(function(a){a.preventDefault();var t=(t=$(this).attr("data-c")).split(" "),e=$(this).attr("data-addr"),d=$(this).attr("data-city"),n=$(this).attr("data-email"),i=$(this).attr("data-clock");$("#yandex_map").find("[data-map-heading]").text(d),$("#yandex_map").find("[data-map-address]").text(e),$("#yandex_map").find("[data-map-email]").text(n),$("#yandex_map").find("[data-map-clock]").text(i),p.setCenter(t,16),$("html, body").animate({scrollTop:$("#yandex_map").offset().top-111},777)})}0<mapYA.length&&ymaps.ready(init);
var form_panel=$("[data-form-validation]"),phone=$(".form__control[type='tel']"),file=$(".form__file-input"),file_name=$(".form__file-name"),input=$(".form__control"),reset=$(".form__reset"),test=$("[data-test]"),filter_view=$("[data-filter-view]");file.on("change",function(e){$(this).siblings(".form__file-name").html($(this).val().replace(/.*(\/|\\)/,"")+"<br> Заменить файл")}),test.on("click",function(e){e.preventDefault(),$(this).closest(".form__panel").find(".form__result").addClass("is--visible"),$(this).closest(".form__panel").find(".form__wrap").addClass("is--hidden"),$(this).closest(".form__panel").find(".form__bg").addClass("is--result")}),$("[data-form-btn]").on("click",function(e){e.preventDefault(),$(this).next(".form__panel.is--md-open").addClass("is--visible")}),$('form button[type="submit"]').on("click",function(e){e.preventDefault()}),filter_view.on("click",function(e){e.preventDefault(),$(this).closest(".aside__filter").find(".form__checkbox.is--hidden").toggleClass("is--visible")});
$("img").addClass("img-responsive");
var modal_btn_show=$('[data-toggle="modal"]');modal_btn_show.on("click",function(a){var t=$(this).attr("data-target"),d=$(t).find("[data-modal-heading]"),n=$(this).attr("data-modal-heading"),i=$(t).find("[data-modal-heading-small]"),l=$(this).attr("data-modal-heading-small"),e=$(t).find("[data-form-heading]"),h=$(t).find("[data-btn-heading]"),o=$(this).attr("data-btn-heading");d.text(n),i.text(l),e.attr({value:n}),h.text(o)});
var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")}),$('.navbar-aside__dropdown [data-toggle="dropdown"]').on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".azbn__search-dropdown").on("shown.bs.dropdown",function(a){$(".azbn__search-input").focus()});
$("#next").on("click",function(){var a=$(".tabs__pane.active"),e=a.next();e.length&&(a.removeClass("active"),e.addClass("active"))}),$("#prev").on("click",function(){var a=$(".tabs__pane.active"),e=a.prev();e.length&&(a.removeClass("active"),e.addClass("active"))});
$(".text__block table").addClass("table").wrap('<div class="table-responsive"></div>'),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled");
"use strict";$(function(){var s=$("[data-slick-catalog]"),o=$("[data-slick-partners]"),e=$("[data-slick-dots]").data("slick-dots");console.log(e);var t=$('[data-slider-slick="slick-header"]'),i=$('[data-slider-slick="slick-gallery"]'),l='<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',a='<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';s.slick({slidesToShow:2,slidesToScroll:2,arrows:!1,dots:e,infinite:!1,prevArrow:l,nextArrow:a,responsive:[{breakpoint:768,settings:"unslick"}]}),o.slick({slidesToShow:5,slidesToScroll:1,arrows:!1,dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:768,settings:{slidesToShow:3}}]}),t.slick({slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1,dots:!1,autoplay:!0,autoplaySpeed:4e3,fade:!0}),i.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!0,infinite:!0,prevArrow:l,nextArrow:a,responsive:[{breakpoint:1600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{dots:!1,slidesToShow:1,slidesToScroll:1}}]}),$(".slick-cloned .content-block__preview").removeAttr("data-fancybox"),$(".slick-cloned .card-item__preview").removeAttr("data-fancybox")});