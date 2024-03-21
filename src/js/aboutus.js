/* ABOUT US PAGE */

const aboutusAnim = {
  init() {
    let aboutuspage = document.querySelector("#aboutus");

    if (aboutuspage) {
      //Animation of the accordion
      let accordionItem = document.querySelectorAll(".accordion-item");
      let arrows = document.querySelectorAll(".accordion-link");
      let accordionAnswer = document.querySelectorAll(".answer");
      console.log(accordionItem);
      for (let a = 0; a < accordionItem.length; a++) {
        accordionItem[a].addEventListener("click", () => {
          accordionAnswer[a].classList.toggle("accordion-open");
          arrows[a].classList.toggle("active");
        });
      }
    }
  },
};

export default aboutusAnim;
