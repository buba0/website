const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImage.src = img.src;
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});