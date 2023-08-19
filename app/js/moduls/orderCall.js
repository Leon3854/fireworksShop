const orderCall = (
  triggerSelector,
  triggerDarkFon,
  modalWindows,
  closeWindow,
  triggerSend,
  trustWindow
) => {
  const trigger = document.querySelector(triggerSelector);
  const darkFon = document.querySelector(triggerDarkFon);
  const modal = document.querySelector(modalWindows);
  const close = document.querySelector(closeWindow);
  const sendCall = document.querySelector(triggerSend);
  const trust = document.querySelector(trustWindow);
  trigger.addEventListener("click", () => {
    darkFon.style.display = "block";
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  // Close window and delete dark fon
  darkFon.addEventListener("click", (e) => {
    if (e.target === darkFon) {
      darkFon.style.display = "none";
      document.body.style.overflow = "";
    }
  });
  // Close window for click button the close
  close.addEventListener("click", () => {
    darkFon.style.display = "none";
    modal.style.display = "none";
    document.body.style.overflow = "";
  });
  sendCall.addEventListener("click", (e) => {
    if (e.target) {
      e.prevetDefault();
      return false;
    }
  });
};

export default orderCall;
