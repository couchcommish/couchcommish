function toggleNav() {
    var nav = document.getElementById("mobile-nav-menu");
    if (nav.className === "mobile-nav-menu hidden") {
        nav.className = "mobile-nav-menu active";
    } else {
        nav.className = "mobile-nav-menu hidden";
    }
}

