let nav = document.querySelectorAll(".nav a");
let right = document.querySelectorAll(".right a");
let curs = document.querySelector(".cursor");

const mousemove = () => {
  window.addEventListener("mousemove", function (detail) {
    document.querySelector(
      ".cursor"
    ).style.transform = `translate(${detail.clientX}px,${detail.clientY}px)`;
  });
};

nav.forEach(function (elemant) {
  elemant.addEventListener("mouseenter", function () {
    curs.style.scale = 2;
    curs.style.border = "1px solid white";
    curs.style.backgroundColor = "transparent";
    curs.style.zIndex = 999;
  });
  elemant.addEventListener("mouseleave", function () {
    curs.style.scale = 1;
    curs.style.border = "1px solid white";
    curs.style.backgroundColor = "white";
  });
});

right.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    curs.style.scale = 2;
    curs.style.border = "1px solid white";
    curs.style.backgroundColor = "transparent";
    curs.style.zIndex = 999;
  });
  elem.addEventListener("mouseleave", function () {
    curs.style.scale = 1;
    curs.style.border = "1px solid white";
    curs.style.backgroundColor = "white";
  });
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function navigationBarAnimation() {
  let tl = gsap.timeline();

  tl.from(".nav", {
    y: "-20",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
  tl.to(".boundingelem", {
    y: 0,
    duration: 1,
    ease: Expo.easeInOut,
  });
  tl.from(".lastFooter", {
    y: -10,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
  });
}

navigationBarAnimation();
mousemove();

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
    });
  });
});

document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;
  let diffrot = 0;
  elem.addEventListener("mousemove", function (dets) {
    let diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top : diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20,20,diffrot*0.8),
    });
  });
});
