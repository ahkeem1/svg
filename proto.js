// Must come back to This TO MAKE IT WORK BETTER
var main = document.getElementById("main");
var svgCircle = document.getElementById("svgCircle");
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");

main.style.backgroundImage = " url(brilliant.jpg)";

step1.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "1256";
  main.style.backgroundImage = "url(neon.jpg)";
});

step2.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "960";
  main.style.backgroundImage = "url(highrise.jpg)";
});

step3.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "634";
  main.style.backgroundImage = "url(differentDay.jpg)";
});
step4.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "0";
  main.style.backgroundImage = " url(brilliant.jpg)";
});
