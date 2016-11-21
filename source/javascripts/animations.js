$(() => {
  $('.projects').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('.projects').removeClass('animated fadeIn');
  })
  $('a').on('click', function(e){
    $('.projects').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('.projects').removeClass('animated fadeOut');
    });
  })
})
