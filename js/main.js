$(document).ready(function(){
	$('#testimonialSlider').slick({
		dots: true,
		 autoplay: false,
		 autoplaySpeed: 2500
	});


	$('.menu-toggle').on('click',function(e){
		e.preventDefault();
		$('.header-menu').toggleClass('active');
	})
})