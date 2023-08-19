const searchForm = (triggerSearch, searchWindow, closeWindow) => {
  const trigerBtn = document.querySelector(triggerSearch);
  const inputWindow = document.querySelector(searchWindow);
  const triggerClose = document.querySelector(closeWindow);
  trigerBtn.addEventListener("click", () => {
    inputWindow.classList.add("animate__fadeInDown");
    inputWindow.style.display = "block";
    inputWindow.classList.remove("animate__fadeOutUp");
  });
  triggerClose.addEventListener("click", () => {
    inputWindow.classList.remove("animate__fadeInDown");
    // inputWindow.style.display = "";
    inputWindow.classList.add("animate__fadeOutUp");
  });
};
export default searchForm;
