
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





function getScrollBarWidth () {
    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
    $outer.remove();
    return 100 - widthWithScroll;
};
var scrollWidth = getScrollBarWidth ();

$('.menu-icon').on('click',function(event){
	$(this).toggleClass('menu-icon-active');
	$('.main-nav').fadeToggle();
	$('.nav-overley').toggleClass('nav-overley-active');
	if (window.matchMedia("(max-width: 464px)").matches) {
		$('body').toggleClass('not-scroll')
	  } 
	  if (window.matchMedia("(max-width: 1024px)").matches && !($('.header').hasClass('top-header'))) {
		$('.header').addClass('top-header fixed-header')
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
		$('body').addClass('not-scroll');
		$('.header').addClass('fixed-header')
}
	}}


var lastScrollTop = 0;
	
$(window).scroll(function(event) {

	var posit = $(this).scrollTop();
	if (window.matchMedia("(max-width: 1024px)").matches && !($('.nav-overley').hasClass('nav-overley-active'))) {	
		$('.header').addClass('top-header');
		if(posit > lastScrollTop ) {
			$('.header').removeClass('fixed-header');
		
		} else {
	
			$('.header').addClass('fixed-header');
		}
	
		lastScrollTop = posit;
	}


	
});


$(".selector-nav-contacts").css({
	"left":$('.nav-items-active').position().left + "px", 
	"width": $('.nav-items-active').innerWidth() + "px"
});

if($('.col').hasClass('left-col-slider')){
var heroSlider = new Siema({
	selector: '.left-col-slider-wrapper',
	duration: 200,
	easing: 'ease-out',
	perPage: 1,
	startIndex: 0,
	draggable: true,
	multipleDrag: false,
	threshold: 20,
	loop: true,
	rtl: false,
  });
  document.querySelector('.prev-slide').addEventListener('click', () => heroSlider.prev());
document.querySelector('.next-slide').addEventListener('click', () => heroSlider.next());
}


headers = $('.ms-rtestate-field h2'),
output = $('<ul class="article-items-list">');
headers.each(function (index) {
if (this.id === '') {
	this.id = 'id' + index;
}
output.append(
	$('<li class="article-item">').append(
		$('<a>', { href: '#' + this.id , class: 'item-link' }
		).text($(this).text())
		));
});



//anchor-js
$('[data-anchor=true]').click(function() {
	var elementClick = $(this).attr("href")
	var destination = ($(elementClick).offset().top - 65);
	jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	}, 500);
	return false;
});


//modal-js
function getScrollBarWidth () {
	var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
			widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
	$outer.remove();
	return 100 - widthWithScroll;
};
var scrollWidth = getScrollBarWidth ();
console.log(scrollWidth)

// $('#scroll-check').remove();



$('[data-open-modal]').on('click',function(event){
event.preventDefault();
$('[data-modal='+ $(this).attr('data-open-modal') +']').addClass('open-modal');
$('[data-modal='+ $(this).attr('data-open-modal') +']').css({
	"display":"block"
})
$('body').css({
	"overflow":"hidden",
	"padding-right":scrollWidth + "px"
})
$('body').append('<div class="overlay"></div>');
$('.header').css('padding-right',scrollWidth+'px')
})
$('.modal').on('click',function(event){
event.stopPropagation();
$('.modal').removeClass('open-modal')
$('.modal').css({
	"display":"none"
})
$('body').css({
	"overflow":"auto",
	"padding-right":0 + "px"
})
$('.header').css('padding-right',0+'px')
}).children()
	.click(function(e){ 
			e.stopPropagation();
})

$('.close-button').on('click',function(event){
event.stopPropagation();
$('.modal').removeClass('open-modal')
$('.modal').css({
	"display":"none"
})
$('body').css({
	"overflow":"auto",
	"padding-right":0 + "px"
})
$('.header').css('padding-right',0+'px')
})

jQuery(document).on('keyup',function(evt) {
if (evt.keyCode == 27) {
	 if($('.modal').has('onen-modal')){
		$('.modal').removeClass('open-modal')
		$('.modal').css({
			"display":"none"
		})
		$('body').css({
			"overflow":"auto",
			"padding-right":0 + "px"
		})
		$('.header').css('padding-right',0+'px')
	 }
}
});


//ripple
  // MAD-RIPPLE // (jQ+CSS)
  $(document).on("mousedown", "[data-ripple]", function(e) {
    
    var $self = $(this);
    
    if($self.is(".btn-disabled")) {
      return;
    }
    if($self.closest("[data-ripple]")) {
      e.stopPropagation();
    }
    
    var initPos = $self.css("position"),
        offs = $self.offset(),
        x = e.pageX - offs.left,
        y = e.pageY - offs.top,
        dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
        $ripple = $('<div/>', {class : "ripple",appendTo : $self });
    
    if(!initPos || initPos==="static") {
      $self.css({position:"relative"});
    }
    
    $('<div/>', {
      class : "rippleWave",
      css : {
        background: $self.data("ripple"),
        width: dia,
        height: dia,
        left: x - (dia/2),
        top: y - (dia/2),
      },
      appendTo : $ripple,
      one : {
        animationend : function(){
          $ripple.remove();
        }
      }
    });
  });

});