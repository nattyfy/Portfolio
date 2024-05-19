document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navItemsWrapper = document.querySelector('.navitems-wrapper');

    // Function to check if the viewport width is below the breaking point
    function isMobileView() {
        return window.innerWidth <= 860;
    }

    // Toggle dropdown when hamburger menu is clicked
    hamburger.addEventListener('click', function(event) {
        if (isMobileView()) {
            toggleMenu();
            toggleDropdown();
        }
        event.stopPropagation(); // Prevent click from propagating to the body
    });

    // Hide dropdown when clicking outside of it
    document.body.addEventListener('click', function(event) {
        if (isMobileView() && !navItemsWrapper.contains(event.target) && !hamburger.contains(event.target)) {
            hideDropdown();
        }
    });

    // Function to toggle menu icon
    function toggleMenu() {
        hamburger.classList.toggle('close'); // Toggle 'close' class on hamburger
    }

    // Function to toggle dropdown visibility
    function toggleDropdown() {
        if (navItemsWrapper.classList.contains('show')) {
            hideDropdown();
        } else {
            showDropdown();
        }
    }

    // Function to show dropdown
    function showDropdown() {
        navItemsWrapper.classList.add('show');
        navItemsWrapper.style.animation = ''; // Reset animation
        navItemsWrapper.style.opacity = '1'; // Set opacity to 1
    }

    // Function to hide dropdown
    function hideDropdown() {
        navItemsWrapper.style.animation = 'slideOut 0.3s ease forwards'; // Apply slide out animation
        navItemsWrapper.style.opacity = '0'; // Set opacity to 0
        setTimeout(() => {
            navItemsWrapper.classList.remove('show'); // Remove 'show' class after animation completes
            hamburger.classList.remove('close'); // Remove 'close' class to morph back to hamburger icon
            navItemsWrapper.style.opacity = '1'; // Reset opacity to 1 after hiding
        }, 300); // Wait for animation to complete before removing 'show' class
    }
});
