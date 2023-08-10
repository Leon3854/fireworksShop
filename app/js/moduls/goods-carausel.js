const slider = function (triggerSlider) {
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
slider(".card-goods__slider");

const mainSlider = function (triggerSlider) {
  trigger = document.querySelectorAll(triggerSlider);
  $(trigger).slick({
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slider-main__page slick-prev"><i class="bi bi-arrow-left slider-main__left"></i></button>',
    nextArrow:
      '<button type="button" class="slider-main__page slick-next"><i class="bi bi-arrow-right slider-main__right"></i></button>',
  });
};
mainSlider(".slider-main__page");
