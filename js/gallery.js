// Open lightbox for image preview
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');

images.forEach(image => {
    image.addEventListener('click', function () {
        lightbox.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        lightbox.classList.add('active');
    });
});

// Close lightbox
lightbox.addEventListener('click', function () {
    lightbox.classList.remove('active');
});
