(function ($) {
  $('document').ready(function() {

    $('.popular__slider').slick({
      centerMode: true,
      variableWidth: true,
      infinite: true,
      dots: false,
      prevArrow: false,
      nextArrow: false
    });

    $('.product__slider').slick({
      // centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
    });

    $('#zoom').on('click', function() {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('.product__slide').zoom();
      } else {
        $(this).removeClass('active');
        $('.product__slide').trigger('zoom.destroy');;
      }
    });


  });

})(jQuery);
