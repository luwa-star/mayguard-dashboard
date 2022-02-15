const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");
const body = document.querySelector("body");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const sidebarLinks = document.getElementById("sidebar");


hamburger.addEventListener("click", () => {
    document.querySelector(".nav--toggle-open").style.display = "none";
    document.querySelector(".nav--toggle-close").style.display = "block";
    document.getElementById("sidebar").style.display = "block";
    overlay.style.display = "block";
    overlay.style.opacity = "0.3";
});

closeBtn.addEventListener("click", () => {
    document.querySelector(".nav--toggle-close").style.display = "none";
    document.querySelector(".nav--toggle-open").style.display = "block";
    document.getElementById("sidebar").style.display = "none";
    overlay.style.display = "none";
    overlay.style.opacity = "0";
});