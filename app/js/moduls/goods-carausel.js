const cartSlider = function (triggerSlider) {
  trigger = document.querySelectorAll(triggerSlider);
  $(trigger).slick({
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="main-slider_carousel-block slick-prev"><i class="bi bi-arrow-left card-goods__left"></i></button>',
    nextArrow:
      '<button type="button" class="main-slider_carousel-block slick-next"><i class="bi bi-arrow-right card-goods__right"></i></button>',
  });
};
cartSlider(".card-goods__slider");
