let btnLogo = document.getElementById("nav__btn--logo");
let dropdownLogo = document.getElementById("nav-dropdown--logo");
let btnCloseLogo = document.getElementById("nav-dropdown__btn-close--logo");

let btnEnvelope = document.getElementById("nav__btn--envelope");
let dropdownEnvelope = document.getElementById("nav-dropdown--envelope");
let btnCloseEnvelope = document.getElementById("nav-dropdown__btn-close--envelope");

btnLogo.addEventListener("click", () => {
  dropdownLogo.classList.toggle("nav-dropdown--show");
  console.log("btnLogo clicked");
});

btnCloseLogo.addEventListener("click", () => {
  dropdownLogo.classList.remove("nav-dropdown--show");
})


btnEnvelope.addEventListener("click", () => {
  dropdownEnvelope.classList.toggle("nav-dropdown--show");
  console.log("btnEnvelope clicked");
});

btnCloseEnvelope.addEventListener("click", () => {
  dropdownEnvelope.classList.remove("nav-dropdown--show");
})


let sectionWork = document.getElementById("work");
let layoutWork = document.getElementById("work__layout");

let cardCortland = document.getElementById("card--cortland");
let btnCortland = document.getElementById("card__btn--cortland");
let placeholderContainerCortland = document.getElementById("card__placeholder-container--cortland");
let headerCortland = document.getElementById("card__header--cortland");
let subheaderCortland = document.getElementById("card__subheader--cortland");
let arrowContainerCortland = document.getElementById("card__arrow-container--cortland");
let articleCortland = document.getElementById("article--cortland");

let cardFinvo = document.getElementById("card--finvo");
let btnFinvo = document.getElementById("card__btn--finvo");
let placeholderContainerFinvo = document.getElementById("card__placeholder-container--finvo");
let headerFinvo = document.getElementById("card__header--finvo");
let subheaderFinvo = document.getElementById("card__subheader--finvo");
let arrowContainerFinvo = document.getElementById("card__arrow-container--finvo");
let articleFinvo = document.getElementById("article--finvo");

let cardCfp = document.getElementById("card--cfp");
let btnCfp = document.getElementById("card__btn--cfp");
let placeholderContainerCfp = document.getElementById("card__placeholder-container--cfp");
let headerCfp = document.getElementById("card__header--cfp");
let subheaderCfp = document.getElementById("card__subheader--cfp");
let arrowContainerCfp = document.getElementById("card__arrow-container--cfp");
let articleCfp = document.getElementById("article--cfp");

let elementCards = [cardCortland, cardFinvo, cardCfp];




/*
elementCards.forEach(() => {
  let elementBtns = [btnCortland, btnFinvo, btnCfp];
}) {
  if (item2.classList.contains("card__btn--open")) {
    item.classList.remove("active-card")
  }
}*/



btnCortland.addEventListener("click", cortlandToggle);
btnFinvo.addEventListener("click", finvoToggle);
btnCfp.addEventListener("click", cfpToggle);


let pxOffsetScroll = 152;
let msToScroll = 200;

$(btnCortland).on("click", () => {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(cardCortland).offset().top - pxOffsetScroll
  }, msToScroll);
});

$(btnFinvo).on("click", () => {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(cardFinvo).offset().top - pxOffsetScroll
  }, msToScroll);
});

$(btnCfp).on("click", () => {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(cardCfp).offset().top - pxOffsetScroll
  }, msToScroll);
});



/*
$("a[href^='#']").on("click", (event) => {

  var target = $(this.getAttribute("href"));

  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate({
      scrollTop: target.offset().top - 200
    }, 1000);
  }
});
*/


function cortlandToggle() {
  if (!(btnCortland.classList.contains("card__btn--open"))) {
    // Work section and layout add classes    
    sectionWork.classList.add("work--open");
    layoutWork.classList.add("work__layout--open");

    // Cortland card add classes
    cardCortland.classList.add("card--open");
    btnCortland.classList.add("card__btn--open");
    placeholderContainerCortland.classList.add("card__placeholder-container--open");
    headerCortland.classList.add("card__header--open");
    subheaderCortland.classList.add("card__subheader--open");
    
    arrowContainerCortland.classList.add("card__arrow-container--open");
    articleCortland.classList.add("article--open");

    // Cortland card remove active
    cardCortland.classList.remove("active-card");
    /*
    // Finvo card remove classes
    cardFinvo.classList.remove("card--open");
    btnFinvo.classList.remove("card__btn--open");
    placeholderContainerFinvo.classList.remove("card__placeholder-container--open");
    headerFinvo.classList.remove("card__header--open");
    subheaderFinvo.classList.remove("card__subheader--open");
   
    arrowContainerFinvo.classList.remove("card__arrow-container--open");
    articleFinvo.classList.remove("article--open");

    // Cfp card remove classes
    cardCfp.classList.remove("card--open");
    btnCfp.classList.remove("card__btn--open");
    placeholderContainerCfp.remove("card__placeholder-container--open");
    headerCfp.classList.remove("card__header--cfp");
    subheaderCfp.classList.remove("card__subheader--cfp");
    
    arrowContainerCfp.classList.remove("card__arrow-container--open");
    articleCfp.classList.remove("article--open");
    */

    /*document.querySelector("#card--cortland").scrollIntoView({
      behavior: "smooth"
    });*/

  } 
  else {
    // Work section and layout remove classes
    sectionWork.classList.remove("work--open");
    layoutWork.classList.remove("work__layout--open");

    //Cortland card remove classes
    cardCortland.classList.remove("card--open");
    btnCortland.classList.remove("card__btn--open");
    placeholderContainerCortland.classList.remove("card__placeholder-container--open");
    headerCortland.classList.remove("card__header--open");
    subheaderCortland.classList.remove("card__subheader--open");
    
    arrowContainerCortland.classList.remove("card__arrow-container--open");
    articleCortland.classList.remove("article--open");

    // Cortland card add active
    cardCortland.classList.add("active-card");
  }
}

function finvoToggle() {
  if (!(btnFinvo.classList.contains("card__btn--open"))) {
    // Work section and layout add classes
    sectionWork.classList.add("work--open");
    layoutWork.classList.add("work__layout--open");

    // Finvo card add classes
    cardFinvo.classList.add("card--open");
    btnFinvo.classList.add("card__btn--open");
    placeholderContainerFinvo.classList.add("card__placeholder-container--open");
    headerFinvo.classList.add("card__header--open");
    subheaderFinvo.classList.add("card__subheader--open");
    
    arrowContainerFinvo.classList.add("card__arrow-container--open");
    articleFinvo.classList.add("article--open");

    // Finvo card remove active
    cardFinvo.classList.remove("active-card");
    /*
    // Cortland card remove classes
    cardCortland.classList.remove("card--open");
    btnCortland.classList.remove("card__btn--open");
    placeholderContainerCortland.classList.remove("card__placeholder-container--open");
    headerCortland.classList.remove("card__header--open");
    subheaderCortland.classList.remove("card__subheader--open");
    
    arrowContainerCortland.classList.remove("card__arrow-container--open");
    articleCortland.classList.remove("article--open");

    // Cfp card remove classes
    cardCfp.classList.remove("card--open");
    btnCfp.classList.remove("card__btn--open");
    placeholderContainerCfp.classList.remove("card__placeholder-container--open");
    headerCfp.classList.remove("card__header--cfp");
    subheaderCfp.classList.remove("card__subheader--cfp");
    
    arrowContainerCfp.classList.remove("card__arrow-container--open");
    articleCfp.classList.remove("article--open");
    */
  } 
  else {
    // Work section and layout remove classes
    sectionWork.classList.remove("work--open");
    layoutWork.classList.remove("work__layout--open");

    // Finvo card remove classes
    cardFinvo.classList.remove("card--open");
    btnFinvo.classList.remove("card__btn--open");
    placeholderContainerFinvo.classList.remove("card__placeholder-container--open");
    headerFinvo.classList.remove("card__header--open");
    subheaderFinvo.classList.remove("card__subheader--open");
    
    arrowContainerFinvo.classList.remove("card__arrow-container--open");
    articleFinvo.classList.remove("article--open");

    // Finvo card add active
    cardFinvo.classList.add("active-card");
  }
}

function cfpToggle() {
  if (!(btnCfp.classList.contains("card__btn--open"))) {
    // Work section and layout remove classes
    sectionWork.classList.add("work--open");
    layoutWork.classList.add("work__layout--open");

    // Cfp card add classes
    cardCfp.classList.add("card--open");
    btnCfp.classList.add("card__btn--open");
    placeholderContainerCfp.classList.add("card__placeholder-container--open");
    headerCfp.classList.add("card__header--open");
    subheaderCfp.classList.add("card__subheader--open");
    
    arrowContainerCfp.classList.add("card__arrow-container--open");
    articleCfp.classList.add("article--open");

    // Cfp card remove active
    cardCfp.classList.remove("active-card");

    /*
    // Cortland card remove classes
    cardCortland.classList.remove("card--open");
    btnCortland.classList.remove("card__btn--open");
    placeholderContainerCortland.classList.remove("card__placeholder-container--open");
    headerCortland.classList.remove("card__header--open");
    subheaderCortland.classList.remove("card__subheader--open");
    
    arrowContainerCortland.classList.remove("card__arrow-container--open");
    articleCortland.classList.remove("article--open");

    // Finvo card remove classes
    cardFinvo.classList.remove("card--open");
    btnFinvo.classList.remove("card__btn--open");
    placeholderContainerFinvo.classList.remove("card__placeholder-container--open");
    headerFinvo.classList.remove("card__header--open");
    subheaderFinvo.classList.remove("card__subheader--open");
    
    arrowContainerFinvo.classList.remove("card__arrow-container--open");
    articleFinvo.classList.remove("article--open");
    */
  } 
  else {
    // Work section and layout remove classes
    sectionWork.classList.remove("work--open");
    layoutWork.classList.remove("work__layout--open");

    // Cfp card remove classes
    cardCfp.classList.remove("card--open");
    btnCfp.classList.remove("card__btn--open");
    placeholderContainerCfp.classList.remove("card__placeholder-container--open");
    headerCfp.classList.remove("card__header--open");
    subheaderCfp.classList.remove("card__subheader--open");
    
    arrowContainerCfp.classList.remove("card__arrow-container--open");
    articleCfp.classList.remove("article--open");

    // Cfp card add active
    cardCfp.classList.add("active-card");
  }
}