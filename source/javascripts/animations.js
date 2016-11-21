$(() => {
  $('.projects').addClass('animated fadeIn');

  $('a').on('click', function(e){
    $('.projects').addClass('fadeOut');
  })
})
