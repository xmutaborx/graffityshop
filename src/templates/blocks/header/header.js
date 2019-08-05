$('#burger').click(function() {
  $('.mob-menu').slideToggle(500);
  if ( !$('#burger').hasClass('active') ) {
    $('#burger').addClass('active')
  } else {
    $('#burger').removeClass('active')
  }
});

$('.mob-menu__link--dop').click(function() {

  let ctx = $(this)

  $(this).next().slideToggle(500)

  if (!$(this).hasClass('active')) {
    $(this).addClass('active')
  } else {
    setTimeout(function() {
      ctx.removeClass('active')
    }, 500)
    // $(this).removeClass('active')
  }

  // if ($(this).hasClass('extra') && !$(this).hasClass('extra-active')) {
  //   $(this).addClass('extra-active')
  // } else if ($(this).hasClass('extra') && $(this).hasClass('extra-active')) {
  //   // $(this).removeClass('extra-active')
  //   setTimeout(function() {
  //     ctx.removeClass('extra-active')
  //   }, 500)
  // }

  // if (!$(this).parent().hasClass('color')) {
  //   $(this).parent().addClass('color')
  // } else {
  //   setTimeout(function() {
  //     ctx.parent().removeClass('color')
  //   }, 500)
  // }
});

$('#search').focusin(function() {
  $('.mob-menu__search').css({'width': '90%', 'border-color': '#000'})
})

$('#search').focusout(function() {
  $('.mob-menu__search').css({'width': '100px', 'border-color': '#fff'})
})
