
document.addEventListener('DOMContentLoaded', function(){
	ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
	center: [55.76054506898901,37.5994625],
zoom: 15,
controls: ['zoomControl'],
behaviors: ['drag']
}),

// Создаём макет содержимого.
MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
'<div style="background-color: #414141; font-weight: bold;">$[properties.iconContent]</div>'
),

myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
hintContent: '<div class="hint-map">Тверской бул., Дом 13, корпус 1, Москва, Россия, 123104</div>',
}, {


iconLayout: 'default#image',

iconImageHref: './img/map-icon.svg',

iconImageSize: [60, 60],
iconImageOffset: [-35, -35]
}),
myPlacemark3 = new ymaps.Placemark([54.584222181163646,36.38552449999999], {
	hintContent: '<div class="hint-map">Moscow</div>',

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
		myMap.setCenter([40, 50], 3, {
			checkZoomRange: true
	});
		myMap.geoObjects
		.add(myPlacemark)
	}
	else{
		myMap.geoObjects
		.remove(myPlacemark)
		myMap.setCenter([55.76054506898901,37.5994625], 2,{});
		myMap.geoObjects
		.add(myPlacemark3)
	}
	
})

});
});




function getScrollBarWidth () {
    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
    $outer.remove();
    return 100 - widthWithScroll;
};
var scrollWidth = getScrollBarWidth ();
console.log(scrollWidth)
$('.menu-icon').on('click',function(event){
	$(this).toggleClass('menu-icon-active');
	$('.main-nav').fadeToggle();
	$('.nav-overley').toggleClass('nav-overley-active');
	if (window.matchMedia("(max-width: 464px)").matches) {
		$('body').toggleClass('not-scroll')
	  } 
})
$('.nav-overley').on('click',function(event){
	$('.menu-icon').toggleClass('menu-icon-active');
	$(this).toggleClass('nav-overley-active');
	$('.main-nav').fadeToggle();
	if (window.matchMedia("(max-width: 464px)").matches) {
		$('body').removeClass('not-scroll')
	  } 
})
window.onresize = function() {
	if($('.nav-overley').hasClass('nav-overley-active')){
	if (window.innerWidth > 464) { 	
		$('body').removeClass('not-scroll')
}else{
		$('body').addClass('not-scroll')
}
	}}


var lastScrollTop = 0;
		
$(window).scroll(function(event) {

	var posit = $(this).scrollTop();
	if($(this).scrollTop()>100){
	if(posit > lastScrollTop) {
		$('.header').removeClass('fixed-header');
		$('.header').addClass('top-header');
		setTimeout(function () {
			$('.header').css('position','absolute');
			$('.header').removeClass('bg-header');
			}, 200);	
	} else {

		$('.header').addClass('fixed-header');
		$('.header').addClass('bg-header');
		$('.header').removeClass('top-header');
		$('.header').css('position','fixed');		
	}
}
else{
	$('.header').removeClass('fixed-header');
	$('.header').addClass('top-header');
	setTimeout(function () {
		$('.header').css('position','absolute');
		$('.header').removeClass('bg-header');
		}, 200);
}
	lastScrollTop = posit;
	
});



$(".selector-nav-contacts").css({
	"left":$('.nav-items-active').position().left + "px", 
	"width": $('.nav-items-active').innerWidth() + "px"
});
