(function($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  console.log("CHAKA LAKA");

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#sideNav'
  });

  console.log("Made with love by TK");

})(jQuery); 
