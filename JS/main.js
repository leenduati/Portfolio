const MENUBTN = document.querySelector(".menu-btn");
const MENU = document.querySelector(".menu");
const MENUNAV = document.querySelector(".menu-nav");
const MENUBRANDING = document.querySelector(".menu-branding");
const NAVITEMS = document.querySelectorAll(".nav-item");

let showMenu = false;

//adding event listners;

MENUBTN.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        MENUBTN.classList.add("close");
        MENU.classList.add("show");
        MENUNAV.classList.add("show");
        MENUBRANDING.classList.add("show");
        NAVITEMS.forEach(item => item.classList.add("show"));

        showMenu = true;
    } else {
        MENUBTN.classList.remove("close");
        MENU.classList.remove("show");
        MENUNAV.classList.remove("show");
        MENUBRANDING.classList.remove("show");
        NAVITEMS.forEach(item => item.classList.remove("show"));

        showMenu = false;

    }
}

const IMAGE = document.querySelector(".image");
const PREV = document.querySelector("#prev");
const NEXT = document.querySelector("#next");
let IMAGEARRAY = ["./Images/batman.jpg", "./Images/boondocks.jpg", "./Images/depressedgirl.jpg", "./Images/celeb.jpg", "./Images/eddeddeddy.jpg", "./Images/godofwar.jpg", "./Images/friend.jpg", "./Images/friend2.jpg", "./Images/friend3.jpg", "./Images/theflash.jpg", "./Images/theEye.jpg"];
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var index;
    var x = document.getElementsByClassName("image");

    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = 1;
    }
    for (index = 0; index < x.length; index++) {
        x[index].style.display = "none";

    }
    x[slideIndex - 1].style.display = "block";
    x[slideIndex - 1].classList.add("image")
}