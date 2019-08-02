$('#filters').click(function() {
  $('.filter__menu').slideToggle(500);
  if ( !$('#filters').hasClass('activef') ) {
    $('#filters').addClass('activef')
  } else {
    $('#filters').removeClass('activef')
  }
});
