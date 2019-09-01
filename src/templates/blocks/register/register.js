$('#reg-accord .reg-accord__title').on('click', f_acce);
function f_acce(){
  $('.reg-accord__title').each(function(i) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
    }
  })
  if (!$(this).hasClass('active')) {
    $(this).addClass('active')
  } else {
    $(this).removeClass('active')
  }
  $('#reg-accord .reg-accord__body').not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
}