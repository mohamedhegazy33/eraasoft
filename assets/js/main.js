// show nav in media
const showNav = document.querySelector(".open__menu-btn");
const closeNav = document.querySelector(".close__menu-btn");
const navMenu = document.querySelector(".nav__list");
showNav.addEventListener("click", () => {
  navMenu.style.display = "flex";
  showNav.style.display = "none";
  closeNav.style.display = "inline-block";
});
closeNav.addEventListener("click", () => {
  navMenu.style.display = "none";
  showNav.style.display = "block";
  closeNav.style.display = "none";
});
// scroll to top
let toUp = document.getElementById("toUp");
window.onscroll = () => {
  this.scrollY >= 200
    ? toUp.classList.add("fixshow")
    : toUp.classList.remove("fixshow");
};
toUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// copyright year

var date = new Date();
var year = date.getFullYear();
console.log(year);
document.querySelector(".copyright").innerHTML = `
<p> &copy; ${year} All Rights Reserved. Made with <i class="fa-solid fa-heart"></i> Developed By <a href="https://www.facebook.com/mhegazy33" target="_blank">EraaSoft Student</a></p>
`;
// scrolling nav
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolling", window.scrollY > 50);
});

// show & hide video
const showVideo = document.querySelector(".play__video");
const videoWindow = document.querySelector(".video");
const hidevideo = document.querySelector(".close__video");
showVideo.addEventListener("click", () => {
  console.log("done");
  videoWindow.classList.add("video__active");
});
hidevideo.addEventListener("click", () => {
  videoWindow.classList.remove("video__active");
});
// fqa
const fqas = document.querySelectorAll(".fqa");
fqas.forEach((fqa) => {
  fqa.addEventListener("click", () => {
    fqa.classList.toggle("open");
    const icon = fqa.querySelector(".fqa__icon svg");
    console.log(icon);
    if (icon.className === "fa fa-plus") {
      console.log(true);
      icon.className = "fa fa-minus";
    }
  });
});

// testmonial slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // small screen
  breakpoints: {
    765: {
      slidesPerView: 2,
    },
  },
});

// prevent news submit refresh
const newsBtn = document.querySelector("#newsSubmit");
newsBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

// active wow
new WOW().init();
// change icon


// achive counter
let valueDisplayS = document.querySelectorAll(".number");
const percent = document.querySelector(".percent");
let interval = 5000;
console.log(valueDisplayS);
valueDisplayS.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  console.log(endValue);
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = `${startValue}K+`;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
let valueDisplayG = document.querySelectorAll(".percent");
console.log(valueDisplayS);
valueDisplayG.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  console.log(endValue);
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = `${startValue}%`;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
let valueDisplayA = document.querySelectorAll(".gpa-count");
console.log(valueDisplayS);
valueDisplayA.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  console.log(endValue);
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
