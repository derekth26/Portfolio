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



var currentFig = 1;
var currentDeg = 0;

$(document).ready(function() {

  $('#next').click(function(){
    $('#fig'+currentFig).removeClass('show');
    currentFig++;
    if(currentFig>8){
      currentFig=1;
    }
    currentDeg-=45;
    $('#fig'+currentFig).addClass('show');
    $('.carousel').css({
      "-webkit-transform": "rotateY("+currentDeg+"deg)",
      "-moz-transform": "rotateY("+currentDeg+"deg)",
      "-ms-transform": "rotateY("+currentDeg+"deg)",
      "-o-transform": "rotateY("+currentDeg+"deg)",
      "transform": "rotateY("+currentDeg+"deg)"
    });
  });

  $('#prev').click(function(){
    $('#fig'+currentFig).removeClass('show');
    currentFig--;
    if(currentFig<1){
      currentFig=8;
    }
    currentDeg+=45;
    $('#fig'+currentFig).addClass('show');
    $('.carousel').css({
      "-webkit-transform": "rotateY("+currentDeg+"deg)",
      "-moz-transform": "rotateY("+currentDeg+"deg)",
      "-ms-transform": "rotateY("+currentDeg+"deg)",
      "-o-transform": "rotateY("+currentDeg+"deg)",
      "transform": "rotateY("+currentDeg+"deg)"
    });
  });


});