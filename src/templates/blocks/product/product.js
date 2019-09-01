$('#accordeon .product__accord-title').on('click', f_acc);
function f_acc(){
  $('.product__accord-title').each(function(i) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
    }
  })
  if (!$(this).hasClass('active')) {
    $(this).addClass('active')
  } else {
    $(this).removeClass('active')
  }
  $('#accordeon .product__accord-text').not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
}