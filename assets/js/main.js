$(document).ready(function () {

    //PRELOADER
    $('#preloader').delay(600).fadeOut('slow'); // will fade out the white DIV that covers the website.

    // navbar shrink
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
          $('nav').addClass('shrink');
        } else {
           $('nav').removeClass('shrink');
        }
    });
}); 