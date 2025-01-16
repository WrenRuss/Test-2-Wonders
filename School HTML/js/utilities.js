// Debounce function to improve performance on scroll or resize
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usage example
window.addEventListener(
    'resize',
    debounce(function () {
        console.log('Resized!');
    }, 200)
);
