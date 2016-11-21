$(() => {
  $('.projects').addClass('animated fadeIn')
  $('a').on('click', function(e){
    $('.projects').addClass('fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('.projects').removeClass('animated fadeOut');
    });

  })
})
