$(() => {
  $('.projects a').on('click', function(e){
    $('.projects').addClass('fadeOut');
  })

  $('.nav-menu').on('click', function(e) {
    $('.projects').toggleClass('fadeOut');
  })
})
