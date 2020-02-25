document.addEventListener('DOMContentLoaded', function(){

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

});