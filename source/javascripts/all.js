// This is where it all goes :)

$(function() {
  $(".nav-menu").on('click', function(e){
    $(".nav-content").slideToggle();
  })

  $( window ).resize(function(){
    var width = $( document ).width();
    if(width >= 700) $(".nav-content").show();
    if(width < 700) $(".nav-content").hide();
  })
});
