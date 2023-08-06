// Import vendor jQuery plugin example
// import "~/app/libs/mmenu/dist/mmenu.js";

import icons from "./moduls/icons.js";
import rating from "./moduls/rating.js";
document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  icons(".color-click-heart", ".ico-heart__border", ".ico-heart__fill");
  icons(".color-click-cart", ".ico-cart__border", ".ico-cart__fill");
  icons(".color-cart-goods", ".cart-goods__border", ".cart-goods__fill");
  icons(".card-icon__heart", ".goods__border", ".goods__fill");

  icons(".color-click-arrow", ".bg-arrow__left", ".bg-arrow__right");
  rating(".rating");
});
