$(() => {
  $('body').addClass('animated fadeIn');
  $('a').on('click', function(){
    $('body').addClass('animated fadeOut');
  })
})
