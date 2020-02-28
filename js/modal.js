//modal-js
document.addEventListener('DOMContentLoaded', function(){
function getScrollBarWidth () {
	var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
			widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
	$outer.remove();
	return 100 - widthWithScroll;
};
var scrollWidth = getScrollBarWidth ();

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
if(window.matchMedia("(min-width: 1024px)").matches){
$('.left-col').css('width',$('.left-col').innerWidth()-scrollWidth/2 +'px')
}


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
if(window.matchMedia("(min-width: 1024px)").matches){
	$('.left-col').attr('style','')
	}


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
if(window.matchMedia("(min-width: 1024px)").matches){
	$('.left-col').attr('style','')
	}
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
		if(window.matchMedia("(min-width: 1024px)").matches){
			$('.left-col').attr('style','')
			}
	 }
}
})
});