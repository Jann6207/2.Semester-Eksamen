$(document).ready(function(){

$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('#nyeste_vaerker_container').offset().top }, 'slow');
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
