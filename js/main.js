gsap.registerPlugin(ScrollTrigger);

const menuItems = document.querySelector(".mobileMenu");
const btnMenu = document.querySelector(".burger");
const navbar = document.querySelector("nav");

const mainHeader = document.querySelector(".leftMain h1");
const mainText = document.querySelector(".leftMain p");
const mainBtn = document.querySelector(".learnMore");
const mainImg = document.querySelector(".mainImg");

const businessSec = document.querySelector(".businessTips");
const businessHeader = document.querySelector(".titleTipsSec");
const businessText = document.querySelector(".tipsDesc p");
const tipsOpt = document.querySelector(".tipsOptions");
const firstBusiness = document.querySelector("#first");
const secondBusiness = document.querySelector("#second");
const thirdBusiness = document.querySelector("#third");

const aboutHeader = document.querySelector(".aboutUsDesc h3");
const aboutText = document.querySelector(".aboutUsDesc p");
const aboutImg = document.querySelector(".aboutUsPhoto img");

const featuresHeader = document.querySelector(".textFeature h3");
const featuresText = document.querySelector(".textFeature p");
const featuresImg = document.querySelector(".featureImg img");

const activeMenu = () => {
  if (menuItems.classList.contains("active")) {
    menuItems.classList.remove("active");
    menuItems.classList.add("hide");

    btnMenu.classList.remove("fa-times");
    btnMenu.classList.add("fa-bars");
    btnMenu.style.color = "black";
  } else {
    menuItems.classList.add("active");
    menuItems.classList.remove("hide");

    btnMenu.classList.remove("fa-bars");
    btnMenu.classList.add("fa-times");
    btnMenu.style.color = "white";
  }
};

btnMenu.addEventListener("click", activeMenu);

menuItems.addEventListener("click", function () {
  menuItems.classList.add("hide");
  menuItems.classList.remove("active");
  btnMenu.classList.remove("fa-times");
  btnMenu.classList.add("fa-bars");
  btnMenu.style.color = "black";
});

window.onscroll = () => {
  if (window.scrollY > 70) {
    navbar.classList.add("colorMenu");
  } else {
    navbar.classList.remove("colorMenu");
  }
};

//aniamacja main
gsap.from(mainHeader, 1, { x: "-100%", y: 0, opacity: 0, delay: 0.1 });
gsap.from(mainText, 1, { x: "-100%", y: 0, opacity: 0, delay: 0.7 });
gsap.from(mainImg, 2, { x: "100%", y: 0, opacity: 0, delay: 1.5 });
gsap.from(mainBtn, 1, { x: "0", y: "100%", opacity: 0, delay: 1 });

//animacja Business Tips
gsap.from(businessHeader, 1, {
  scrollTrigger: {
    trigger: ".businessTips",
    start: "20px 80%",
  },
  x: 0,
  y: "-100%",
  opacity: 0.5,
});
gsap.from(businessText, 1, {
  scrollTrigger: {
    trigger: ".businessTips",
    start: "20px 80%",
  },
  x: 0,
  y: "-100%",
  opacity: 0.5,
});
gsap.from(tipsOpt.children, 1.5, {
  scrollTrigger: {
    trigger: ".tipsOptions",
    start: "top 80%",
  },
  x: 0,
  y: "100%",
  autoAlpha: 0,
  stagger: 0.4,
});

//animacje About Us
gsap.from(aboutHeader, 1.5, {
  scrollTrigger: {
    trigger: ".aboutUs",
    start: "center 80%",
  },
  x: 0,
  y: "100%",
  autoAlpha: 0,
});

gsap.from(aboutText, 1.5, {
  scrollTrigger: {
    trigger: ".aboutUs",
    start: "center 80%",
  },
  x: 0,
  y: "100%",
  autoAlpha: 0,
});

gsap.from(aboutImg, 2.5, {
  scrollTrigger: {
    trigger: ".aboutUs",
    start: "center 80%",
  },
  x: 0,
  y: "100%",
  autoAlpha: 0,
});

//animacje Features
gsap.from(featuresHeader, 1.5, {
  scrollTrigger: {
    trigger: ".featureSec",
    start: "top 80%",
  },
  x: 0,
  y: "100%",
  autoAlpha: 0,
});

gsap.from(featuresText, 1.5, {
  scrollTrigger: {
    trigger: ".featureSec",
    start: "top 80%",
  },
  x: 0,
  y: "100%",
  autoAlpha: 0,
});

gsap.from(featuresImg, 2.5, {
  scrollTrigger: {
    trigger: ".featureSec",
    start: "top 80%",
  },
  x: 0,
  y: "100%",
  autoAlpha: 0,
});
