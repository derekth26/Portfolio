//fade in on scroll

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll(function() {
        /* Check the location of each desired element */
        $('.fade').each(function(i) {
            var top_of_object = $(this).position().top; // Get the top of the element
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust this number to make the fade trigger earlier */
            if (bottom_of_window > top_of_object + $(this).outerHeight() / 3) { 
                $(this).animate({'opacity': '1'}, 900); // Fade in the object
            }
        });
    });
});


var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

   
});


$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
	$('.page-loader').fadeOut('slow');
	},3500);
});



var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	loop: true,
	slidesPerView: "2",
	coverflowEffect: {
		rotate: 0,
		stretch: 30,
		depth: 100,
		modifier: 5,
		slideShadows: true
	},
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next"
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: false
	}
});
