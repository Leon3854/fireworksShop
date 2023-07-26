const icons = (triggerSelector, iconBoard, iconFill) => {
  const trigger = document.querySelectorAll(triggerSelector);
  const iconboard = document.querySelector(iconBoard);
  const iconfill = document.querySelector(iconFill);
  trigger.forEach((item) => {
    console.log(item);
    item.addEventListener("click", (e) => {
      if (e.target) {
        e.preventDefault();
      }
      iconboard.classList.toggle("is-active");
      iconfill.classList.toggle("is-active");
    });
  });
};
export default icons;
