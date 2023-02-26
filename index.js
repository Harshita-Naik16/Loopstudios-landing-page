const overlayBox = document.querySelector(".overlay");
const navLinkList = document.querySelector(".nav-links");
const hamBtn = document.querySelector(".ham-menu");
const closeBtn = document.querySelector(".close-menu");

hamBtn.addEventListener("click", navbarToggle)
closeBtn.addEventListener("click", navbarToggle)

function navbarToggle() {
    navLinkList.classList.toggle("display-block");
    hamBtn.classList.toggle("display-block");
    closeBtn.classList.toggle("display-block");
    overlayBox.classList.toggle("bg-black")
}

