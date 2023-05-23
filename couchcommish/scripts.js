document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('mobile-menu-toggle');
    var navMenu = document.getElementById('mobile-nav-menu');

    // Toggle the menu when the hamburger icon is clicked
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close the menu when a navigation item is clicked
    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navMenu.classList.remove('active');
        }
    });
});
