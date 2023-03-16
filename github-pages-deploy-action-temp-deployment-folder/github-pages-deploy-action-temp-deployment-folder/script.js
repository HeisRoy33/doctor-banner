document.body.classList.add(localStorage.getItem("theme") || "light");

var scene = document.getElementById("scene");
var parallax = new Parallax(scene);

TweenMax.from(".logo", 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".menu-links ul li",
  1,
  {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut,
  },
  0.08
);

TweenMax.from(".search", 1, {
  delay: 0.5,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.from(".account", 1, {
  delay: 0.6,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.from(".cart", 1, {
  delay: 0.7,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.from(".hero", 1, {
  delay: 2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".aboutus-hero", 1, {
  delay: 2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".virus .layer:nth-child(1)", 2, {
  delay: 2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".virus .layer:nth-child(2)", 2, {
  delay: 2.1,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".virus .layer:nth-child(3)", 2, {
  delay: 2.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".virus .layer:nth-child(4)", 2, {
  delay: 2.3,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".virus .layer:nth-child(5)", 2, {
  delay: 2.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});

TweenMax.from(".title", 1, {
  delay: 1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".aboutus-title", 1, {
  delay: 1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".partner-title", 1, {
  delay: 1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".tagline", 1, {
  delay: 1.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".aboutus-tagline", 1, {
  delay: 1.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".partner-tagline", 1, {
  delay: 1.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".pages", 1, {
  delay: 1.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".more", 1, {
  delay: 1.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".aboutus-more", 1, {
  delay: 1.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".desc", 1, {
  delay: 1.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".arrows", 1, {
  delay: 2,
  opacity: 0,
  ease: Expo.easeInOut,
});

//Day-Night Toggle
const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.getItem("theme") === "dark"
    ? localStorage.setItem("theme", "light")
    : localStorage.setItem("theme", "dark");
});

// toggle menu/navbar script
$(".menu-btn").click(function () {
  $(".nav .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});
