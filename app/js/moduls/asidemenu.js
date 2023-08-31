const asideList = (triggerAside, navigation, siberMemu) => {
  const clickBtn = document.querySelector(triggerAside);
  const navList = document.querySelector(navigation);
  const menu = document.querySelector(siberMemu);
  clickBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
    document.body.style.overflow = "hidden";
  });
  navList.addEventListener("click", () => {
    navList.classList.remove("active");
    document.body.style.overflow = "";
  });
};
export default asideList;
