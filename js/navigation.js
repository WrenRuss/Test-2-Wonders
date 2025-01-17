// Highlight the active page in the navigation
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.fontWeight = 'bold';
        link.style.textDecoration = 'underline';
    }
});

// Toggle responsive menu (for mobile navigation)
const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('nav');
if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
}
