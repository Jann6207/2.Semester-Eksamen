$(document).ready(function () {

    $(function () {
        $('.click-scroll').click(function () {
            $('html, body').animate({
                scrollTop: $('#nyeste_vaerker_container').offset().top
            }, 'slow');
            return false;
        });
    });


    $(function () {
        $('.arrow2').click(function () {
            $('html, body').animate({
                scrollTop: $('#bag_om_vaekert_container').offset().top
            }, 'slow');
            return false;
        });
    });



    $(function () {
        $('.arrow').click(function () {
            $('html, body').animate({
                scrollTop: $('#udstillinger').offset().top
            }, 'slow');
            return false;
        });
    });



})






/*$(document).ready(function(){

$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('id.nyeste_vaerker_container').offset().top }, 'slow');
      return false;
    })}*/
