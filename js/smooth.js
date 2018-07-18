$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 30) { // use any value lower than the navbar height, [20] is an example

            $('.navbar-custom').addClass("compress");

          } else  {

            $('.navbar-custom').removeClass("compress");

        }
    });

});
