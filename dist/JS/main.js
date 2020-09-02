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