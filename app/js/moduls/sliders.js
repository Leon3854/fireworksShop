const nameSliders = (name) => {
  let nameSlide = document.querySelectorAll(name);
  $(nameSlide).slick({
    // autoplay: true,
    autoplaySpeed: 3500,
    speed: 2000,
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev top-slider__left"><i class="bi bi-arrow-left slider-prezent__left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next top-slider__right"><i class="bi bi-arrow-right slider-prezent__right"></i></button>',
  });
};

export default nameSliders;
