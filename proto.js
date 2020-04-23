// Must come back to This TO MAKE IT WORK BETTER
var main = document.getElementById("main");
var svgCircle = document.getElementById("svgCircle");
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var userBox2 = document.getElementById("userBox2");

main.style.backgroundImage = " url(brilliant.jpg)";

step1.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "1256";
  main.style.backgroundImage = "url(neon.jpg)";
  userBox2.style.top = "170px";
});

step2.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "950";
  main.style.backgroundImage = "url(highrise.jpg)";
  userBox2.style.top = "-300px";
});

step3.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "645";
  main.style.backgroundImage = "url(differentDay.jpg)";
  userBox2.style.top = "-730px";
});
step4.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "0";
  main.style.backgroundImage = " url(brilliant.jpg)";
});
