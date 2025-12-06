document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    
    // Toggle hamburger menu
    hamburgerBtn.addEventListener('click', function() {
        // Toggle active class on hamburger button
        hamburgerBtn.classList.toggle('active');
        
        // Toggle active class on navigation menu
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on navigation links (mobile only)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if screen is mobile size
            if (window.innerWidth <= 480) {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Close menu when clicking outside (mobile only)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 480) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickInsideHamburger = hamburgerBtn.contains(event.target);
            
            if (!isClickInsideNav && !isClickInsideHamburger && navMenu.classList.contains('active')) {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
});