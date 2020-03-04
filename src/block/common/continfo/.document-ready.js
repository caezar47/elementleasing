var mapYA = $("#yandex_map");
if(mapYA.length > 0) { 
	ymaps.ready(init);
}
function init(){
	var mainMap = $("[data-map-base]");
	var mainCoord = mainMap.attr("data-c");
	var mainCoord = mainCoord.split(" ");

    var myMap = new ymaps.Map("yandex_map", {
        center: mainCoord,
        zoom: 16,
        controls: []
    });

	var object = $("[data-coord]");
    for(var i = 0; i < object.length; i++) {
		var arCoord = object[i].dataset.c;
    	var arCoord = arCoord.split(" ");
		var arAddr = object[i].dataset.addr;
	   	var myGeoObject = new ymaps.GeoObject({
	        geometry: {
	            type: "Point",
	            coordinates: arCoord
	        },
	        /*properties: {
	            iconContent: arAddr,
	        }*/
	    }, {
	        preset: 'islands#blueStretchyIcon',
	    });
	    myMap.geoObjects.add(myGeoObject);
	}
	object.click(function(e) {
		e.preventDefault();
		var curr_cood = $(this).attr("data-c");
		var curr_cood = curr_cood.split(" ");
		var currAdres = $(this).attr("data-addr");
		var currCity = $(this).attr("data-city");
		var currEmail = $(this).attr("data-email");
		var currClock = $(this).attr("data-clock");
		//console.log(curr_cood);
		$('#yandex_map').find('[data-map-heading]').text(currCity);
		$('#yandex_map').find('[data-map-address]').text(currAdres);
		$('#yandex_map').find('[data-map-email]').text(currEmail);
		$('#yandex_map').find('[data-map-clock]').text(currClock);
		myMap.setCenter(curr_cood, 16);
		$('html, body').animate({
			scrollTop: ($('#yandex_map').offset().top - 111)
		}, 777);
	});

}
