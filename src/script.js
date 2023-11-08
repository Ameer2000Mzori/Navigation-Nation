//getting our elements :
const overlay = document.getElementsByClassName("overlay")[0];
const homeLi = document.getElementsByClassName("home")[0];
const aboutLi = document.getElementsByClassName("About")[0];
const projectsLi = document.getElementsByClassName("Projects")[0];
const SkillsLi = document.getElementsByClassName("Skills")[0];
const contactLi = document.getElementsByClassName("Contact")[0];

//animation btn
function myFunction(x) {
  x.classList.toggle("change");

  // our animation if :
  if (!overlay.classList.contains("left")) {
    overlay.classList.add("left");
    homeLi.classList.add("slide-in-1");
    homeLi.classList.remove("slide-out-1");
    aboutLi.classList.add("slide-in-2");
    aboutLi.classList.remove("slide-out-2");
    projectsLi.classList.add("slide-in-3");
    projectsLi.classList.remove("slide-out-3");
    SkillsLi.classList.add("slide-in-4");
    SkillsLi.classList.remove("slide-out-4");
    contactLi.classList.add("slide-in-5");
    contactLi.classList.remove("slide-out-5");
  } else {
    overlay.classList.remove("left");
    homeLi.classList.add("slide-out-1");
    homeLi.classList.remove("slide-in-1");
    aboutLi.classList.add("slide-out-2");
    aboutLi.classList.remove("slide-in-2");
    projectsLi.classList.add("slide-out-3");
    projectsLi.classList.remove("slide-in-3");
    SkillsLi.classList.add("slide-out-4");
    SkillsLi.classList.remove("slide-in-4");
    contactLi.classList.add("slide-out-5");
    contactLi.classList.remove("slide-in-5");
  }
}
