function toggleNav() {
    var nav = document.getElementById("mobile-nav-menu");
    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden");
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
        nav.classList.add("hidden");
    }
}

