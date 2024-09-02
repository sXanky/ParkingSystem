// Add event listeners to nav links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // Prevent default link behavior
        e.preventDefault();

        // Update content based on link clicked
        const content = document.querySelector('.content');
        content.innerHTML = `You clicked on ${link.textContent}`;
    });
});