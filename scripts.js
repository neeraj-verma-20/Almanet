// JavaScript to toggle the side navigation menu
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sideNav = document.getElementById('sideNav');

// Function to toggle the side navigation menu
function toggleSideNav() {
    const currentLeft = sideNav.style.left;
    sideNav.style.left = currentLeft === '0px' ? '-250px' : '0'; // Toggle side nav position
}

// Add click event to hamburger menu to open/close the side nav
hamburgerMenu.addEventListener('click', (e) => {
    toggleSideNav();
    e.stopPropagation(); // Prevent the click event from propagating to the document
});

// Close the side navigation if the user clicks anywhere outside the sideNav or hamburgerMenu
document.addEventListener('click', (e) => {
    if (!sideNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        sideNav.style.left = '-250px'; // Close the side nav if click is outside
    }
});
