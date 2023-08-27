const accordion = (allAccord, control, content) => {
  const accord = document.querySelectorAll(allAccord);

  const titles = document.querySelectorAll(control);
  const contents = document.querySelectorAll(content);

  titles.forEach((item) =>
    item.addEventListener("click", () => {
      const activContent = document.querySelector("#" + item.dataset.tab);
      if (activContent.classList.contains("active")) {
        activContent.classList.remove("active");
        item.classList.remove("active");
        activContent.style.maxHeight = 0;
      } else {
        contents.forEach((elem) => {
          elem.classList.remove("active");
          elem.style.maxHeight = 0;
        });
        titles.forEach((elem) => elem.classList.remove("active"));

        item.classList.add("active");
        activContent.classList.add("active");
        activContent.style.maxHeight = activContent.scrollHeight + "px";
      }
    })
  );

  // accord.forEach((item, i) => {
  //   const control = item.querySelector(acordControl);
  //   control.addEventListener("click", () => {
  //     // item.classList.toggle("active");
  //     control.classList.toggle("active");
  //     const content = item.querySelector(acordContent);
  //     content.classList.toggle("active");
  //     if (content.classList.contains("active")) {
  //       control.setAttribute("aria-expanded", true);
  //       content.setAttribute("aria-hidden", false);
  //       content.style.paddingTop = "0px";
  //       content.style.maxHeight = content.scrollHeight + "px";
  //     } else {
  //       control.setAttribute("aria-expanded", false);
  //       content.setAttribute("aria-hidden", true);
  //       content.style.maxHeight = null;
  //       // content.style.height = "0px";
  //     }
  //   });
  // });
};
export default accordion;
