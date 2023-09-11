// Import vendor jQuery plugin example
// import "~/app/libs/mmenu/dist/mmenu.js";
import $ from "jquery";
import slick from "./slick/slick.min.js";

import orderCall from "./moduls/orderCall.js";
import searchForm from "./moduls/search.js";
import icons from "./moduls/icons.js";
import rating from "./moduls/rating.js";
import mainSlider from "./moduls/mainSlider.js";
import nameSliders from "./moduls/sliders.js";
import accordion from "./moduls/accordion.js";
import asideList from "./moduls/asidemenu.js";
document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  icons(".color-click-heart", ".ico-heart__border", ".ico-heart__fill");
  icons(".color-click-cart", ".ico-cart__border", ".ico-cart__fill");
  icons(".color-cart-goods", ".cart-goods__border", ".cart-goods__fill");
  icons(".card-icon__heart", ".goods__border", ".goods__fill");
  icons(".color-click-arrow", ".bg-arrow__left", ".bg-arrow__right");
  rating(".rating");
  orderCall(
    ".top-control",
    ".body-modal__window",
    ".order-call__wrapper",
    ".modal-circle_circle",
    ".send-order__red-btn",
    ".thanks-for-trust"
  );
  searchForm(
    ".block-search",
    ".search-input__wrapper.animate__animated",
    ".form-circle.animate__animated"
  );
  // mainSlider(".slider-main__page");
  nameSliders(".presentation-slider");
  accordion(".accordion", ".accordion__control", ".accordion__content");
  asideList(".navigation-page__btn", ".navigation-modal", ".sidebar-menu");
});
