
document.addEventListener('DOMContentLoaded', function(){


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


//ripple
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