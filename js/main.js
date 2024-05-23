document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector(".nav-two .info .fa-bars");
    let links = document.querySelector(".nav-two .links ul");

    menuIcon.onclick = function () {
        links.classList.toggle("dis");
    }
});