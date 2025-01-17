// Animate elements on scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');

window.addEventListener('scroll', function () {
    animatedElements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom > 0) {
            element.classList.add('visible');
        }
    });
});

// Example CSS for animations
/* 
.animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-in-out;
}

.animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
}
*/
