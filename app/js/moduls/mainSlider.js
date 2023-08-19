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
export default mainSlider;
