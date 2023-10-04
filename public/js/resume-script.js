
let btnName = document.getElementById("intro-resume__name");
let modalInfo = document.getElementById("intro-resume__name--info");

btnName.addEventListener("click", () => {
  btnName.classList.toggle("intro-resume__name--open");
  modalInfo.classList.toggle("intro-resume__name--info--open");
})