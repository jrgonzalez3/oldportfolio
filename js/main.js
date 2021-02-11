const navSlide = () => {
  var burger = document.querySelector(".hamburger");
  var navbar = document.querySelector(".fullNavbar");
  var homeNavlink = document.querySelector(".homeNavlink");
  var aboutNavlink = document.querySelector(".aboutNavlink");
  var worksNavLink = document.querySelector(".worksNavlink");
  var contactNavLink = document.querySelector(".contactNavlink");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  homeNavlink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  aboutNavlink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  worksNavLink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  contactNavLink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });
};

const knowMore = () => {
  var buttonKnowMore = document.querySelector(".knowMoreAbout");
  var fullKnowMore = document.querySelector(".hiddenKnowMoreSection");
  var backAarrowMore = document.querySelector(
    ".hiddenKnowMoreSectionArrowBack"
  );

  buttonKnowMore.addEventListener("click", () => {
    fullKnowMore.classList.toggle("activeHiddenAbout");
  });

  backAarrowMore.addEventListener("click", () => {
    fullKnowMore.classList.toggle("activeHiddenAbout");
  });
};

const changeLanguage = (language) => {
  let aboutTitle = document.querySelector(".aboutTitle");
  let worksTitle = document.querySelector(".worksTitle");
  let contactTitle = document.querySelector(".contactTitle");
  let descriptionHero = document.querySelector(".descriptionHero");
  let homeNavlink = document.querySelector(".homeNavlink");
  let aboutNavlink = document.querySelector(".aboutNavlink");
  let worksNavlink = document.querySelector(".worksNavlink");
  let contactNavlink = document.querySelector(".contactNavlink");
  let scrollDown = document.querySelector(".scrollDownVertical");
  let subtitleAbout = document.querySelector(".subtitleAbout");
  let aboutDescription = document.getElementById("#aboutDescriptionLanguage");
  let knowMoreAbout = document.querySelector(".knowMoreAbout");
  let aboutKnowMoreDescription = document.querySelector(".aboutKnowMoreDescription");
  let subtitleWorks = document.querySelector(".subtitleWorks");
  let cv = document.querySelector(".cvContact");
  let description_me = document.querySelector(".description_me");

  if (language === "english") {
    descriptionHero.innerHTML = "Passionate about web/frontend/backend";
    homeNavlink.innerHTML = "<a href='" + "#homeSection" + "'>HOME</a>";
    aboutNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>ABOUT ME</a>";
    worksNavlink.innerHTML = "<a href='" + "#worksSection" + "'>WORKS</a>";
    contactNavlink.innerHTML =
      "<a href='" + "#contactSection" + "'>CONTACT</a>";
    scrollDown.innerHTML = "scrolldown";
    aboutTitle.innerHTML = "About me";
    subtitleAbout.innerHTML = "Web Developer";
    knowMoreAbout.innerHTML = "Know more > ";
    contactTitle.innerHTML = "Contact me";
    aboutKnowMoreDescription.innerHTML = "Currently working a Remote Dev."
    worksTitle.innerHTML = "Works"+ "</br>" ;
    subtitleWorks.innerHTML = "my portfolio";
    cv.href = "./cv/Cv_Ing_JustoG_Eng.pdf";
    description_me.innerHTML = "I handle technologies like Php, mysql, codeigniter, laravel, prestashop, wordpress, react, node, javascript, trello, jira, figma, etc.";
    } else {
    descriptionHero.innerHTML = "Pasión por la Web/frontend/Backend";
    homeNavlink.innerHTML = "<a href='" + "#homeSection" + "'>Inicio</a>";
    aboutNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>¿Quien Soy?</a>";
    worksNavlink.innerHTML = "<a href='" + "#worksSection" + "'>Trabajos</a>";
    contactNavlink.innerHTML = "<a href='" + "#contactSection" + "'>Contacto</a>";
    scrollDown.innerHTML = "Abajo";
    aboutTitle.innerHTML = "¿Quien soy?";
    worksTitle.innerHTML = "Trabajos" + "</br>" ;
    subtitleAbout.innerHTML = "Desarrollador Web";
    knowMoreAbout.innerHTML = "Más > ";
    contactTitle.innerHTML = "Contáctame";
    aboutKnowMoreDescription.innerHTML = "Actualmente, trabajo como Desarrollador Web en forma Remota";
    subtitleWorks.innerHTML = "mi Portafolio";
    cv.href = "./cv/Cv_Ing_JustoG_Esp.pdf";
    description_me.innerHTML = "Manejo tecnologias como Php, mysql, codeigniter, laravel, prestashop, wordpress, react, node, javascript, trello, jira, figma, etc.";
  }
};
changeLanguage();
knowMore();
navSlide();

//Initialisation de la fonction de l'API Javascript
function initMap() {
  var epitech = { lat: 45.74671126902152, lng: 4.834958581829663 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: epitech,
  });
  var marker = new google.maps.Marker({
    position: epitech,
    map: map,
  });
}
