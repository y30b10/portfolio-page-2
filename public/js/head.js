// Get the document height for vh() function in SCSS
window.addEventListener('DOMContentLoaded', setDocHeight);
window.addEventListener('resize', setDocHeight);
window.addEventListener('orientationchange', setDocHeight);

function setDocHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);

  console.log("--vh set");
}