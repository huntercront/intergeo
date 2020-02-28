document.addEventListener('DOMContentLoaded', function(){
ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
		center: [55.76054506898901,37.5994625],
	zoom: 13,
	controls: ['zoomControl'],
	behaviors: ['drag']
	}),
	
	// Создаём макет содержимого.
	MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	'<div style="background-color: #414141; font-weight: bold;">$[properties.iconContent]</div>'
	),
	
	myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	hintContent: '<div class="hint-map">г. Москва Тверской бульвар 13 с.1 офис 654</div>',
	}, {
	
	
	iconLayout: 'default#image',
	
	iconImageHref: './img/map-icon.svg',
	
	iconImageSize: [60, 60],
	iconImageOffset: [-35, -35]
	}),
	myPlacemark3 = new ymaps.Placemark([56.03553156871068,92.93068899999997], {
		hintContent: '<div class="hint-map">г.Красноярск ул Партизана Железняка 35А</div>',
	
	}, {
			iconLayout: 'default#image',
			iconImageHref: './img/map-icon.svg',
			iconImageSize: [60, 60],
			iconImageOffset: [-35, -35]
		});
	
		myMap.geoObjects
		.add(myPlacemark)
	
	$(".nav-contacts-link").on("click",function(e){
		$('.nav-contacts-link').removeClass('nav-items-active')
		$(this).addClass('nav-items-active');
	
		var activeWidth = $(this).innerWidth();
		var itemPos = $(this).position();
		$(".selector-nav-contacts").css({
			"left":itemPos.left + "px", 
			"width": activeWidth + "px"
		});
	
		$('.tab-contacts').removeClass('active-tab');
		$('[data-tab='+$(this).attr('data-select')+']').addClass('active-tab');
		if($(this).attr('data-select')==1){
			myMap.geoObjects
			.remove(myPlacemark3)
			myMap.setCenter([55.76054506898901,37.5994625], 13, {
				checkZoomRange: true
		});
			myMap.geoObjects
			.add(myPlacemark)
		}
		else{
			myMap.geoObjects
			.remove(myPlacemark)
			myMap.setCenter([56.03553156871068,92.93068899999997], 13,{});
			myMap.geoObjects
			.add(myPlacemark3)
		}
		
	})
	
	});
	$(".selector-nav-contacts").css({
		"left":$('.nav-items-active').position().left + "px", 
		"width": $('.nav-items-active').innerWidth() + "px"
	});
});