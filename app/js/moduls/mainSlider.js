const mainSlider = function (triggerSlider) {
  trigger = document.querySelectorAll(triggerSlider);
  $(trigger).slick({
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 2000,
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev top-slider__left"><i class="bi bi-arrow-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next top-slider__right"><i class="bi bi-arrow-right"></i></button>',
  });
};
export default mainSlider;
