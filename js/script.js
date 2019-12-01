
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
// Опции.
// Необходимо указать данный тип макета.
iconLayout: 'default#image',
// Своё изображение иконки метки.
iconImageHref: './img/map-icon.svg',
// Размеры метки.
// iconImageSize: [100, 42],
iconImageSize: [60, 60],
iconImageOffset: [-35, -35]
});
myMap.geoObjects
.add(myPlacemark)
// .add(myPlacemarkWithContent);
});
});




function scrollbarWidth() {
  var documentWidth = parseInt(document.documentElement.clientWidth);
  var windowsWidth = parseInt(window.innerWidth);
  var scrollbarWidth = windowsWidth - documentWidth;
  return scrollbarWidth;
}
$('.menu-icon').on('click',function(event){
	$(this).toggleClass('menu-icon-active');
	$('.main-nav').fadeToggle();
	// if($(this).has('menu-icon-active')){
	// 	console.log('has')
	// 	$('body').css('padding-right','0px');
	// }
	// else{
	

	// 	console.log('no has')
	// }
})
$('.lang-active').on('click',function(event){
	event.preventDefault();
	$('.hidden-language').fadeToggle();
	$(this).toggleClass('lang-choose')
})
// var indicator = new WheelIndicator({
// 	callback: function(e){
// 			if(e.direction == 'up'){
// 				$('.header').css('position','fixed')
// 			}
// 			else{
// 				$('.header').css('position','absolute')
// 			}
// 	},
// 	preventMouse: false
// });