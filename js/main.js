$(function () {
     // Menu opener hamburger
	$('.humburger').click(function() {
		$('.humburger').toggleClass('active');
		$('.menu-open').toggleClass('active');
         
	});
    // Fixed navigation

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){  
            $('.header-top').addClass("sticky");
        }
        else{
            $('.header-top').removeClass("sticky");
        }
    });
    
    // Слайдер
     $('.slider-about').slick({
       dots: false,
       infinite: false
     });
    
    // Слайдер, второй
     $('.reviews-slider').slick({
       dots: true,
       infinite: false
     });
});
