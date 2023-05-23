function toggleNav() {
    var nav = document.getElementById("mobile-nav-menu");
    if (nav.className === "mobile-nav hidden") {
        nav.className = "mobile-nav active";
    } else {
        nav.className = "mobile-nav hidden";
    }
}

