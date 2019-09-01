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
      centerMode: true,
      variableWidth: true,
      infinite: true,
      dots: true,
      arrows: true,
    });

    $('.product__slide').zoom();

  });

})(jQuery);
