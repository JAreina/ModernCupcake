//CAMBIAR EL ASPECTO DEL SCROLL DE LA PÁGINA
$(document).ready(

  function() { 

    $("html").niceScroll({
    		mousescrollstep: 70,
    cursorcolor: "#3CAC8D",
    cursorwidth: "5px",
    cursorborderradius: "0px",
    cursorborder: "none",

});

  }

);

//animación 4 columnas

(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    //$(".columnas4").hide();


    // fade in 
    $(function () {
        $(window).scroll(function () {

                 // obtener la distancia a la que se ejecutara el fadeIn o fadeOut
            if ($(this).scrollTop() > 880) {
                //$('.columnas4').fadeIn(3000);
                //$('.columnas4').addClass('animated bounceInUp');
                
                    $('.pasteles img').addClass('animated bounceInRight')
               
                
                
            } else{
            	//$('.columnas4').fadeOut(1000);
              //$('.columnas4').removeClass('animated  bounceInUp');
              $('.pasteles img').removeClass('animated bounceInRight')
              }
           
        });
    });

});
  }(jQuery));


//ANIMACIÓN COLUMNAS3

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 1350){
			
			
			$('.columnas3 img').addClass('animated bounceInUp');
			$('.columnas3 img').fadeIn('slow');
      $('.columnas3').css('overflow-y','hidden');
			$('.columnas3 h2').addClass('animated bounceInDown')
      
		}else{
			$('.columnas3 img').fadeOut('slow');
			$('.columnas3 img').removeClass('animated bounceInUp');
			$('.columnas3 h2').removeClass('animated bounceInDown')
		};
	});

});