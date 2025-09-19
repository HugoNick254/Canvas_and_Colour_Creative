// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select the navigation bar
    const navbar = document.querySelector('.navbar');
    if (!navbar) {
        console.error('Navbar element not found.');
        return;
    }

    // Select the navigation links
    const navLinks = navbar.querySelector('.nav-links');
    if (!navLinks) {
        console.error('Nav links element not found.');
        return;
    }

    // Create a new button element for the menu icon
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'nav-links');
    
    // Add an icon to the button (you can use an SVG or a font icon)
    // Using a simple SVG for a clean look
    menuButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    `;

    // Insert the menu button before the nav links in the navbar
    navbar.insertBefore(menuButton, navLinks);

    // Add a click event listener to the menu button
    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    // Handle responsiveness on window resize
    const handleResize = () => {
        if (window.innerWidth > 768) { // Tailwind's 'md' breakpoint
            navLinks.classList.remove('active');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the correct state on page load

});
