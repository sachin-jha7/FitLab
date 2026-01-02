let sideBar = document.querySelector(".nav-links");
let menuBtn = document.querySelector(".menu-btn");
let crossBtn = document.querySelector(".cross-btn");
crossBtn.style.display = "none";

menuBtn.addEventListener("click", () => {
    sideBar.style.top = "60px";
    crossBtn.style.display = "block";
    menuBtn.style.display = "none";
});

crossBtn.addEventListener("click", () => {
    sideBar.style.top = "-100%";
    menuBtn.style.display = "block";
    crossBtn.style.display = "none";
});