const images = [
    'img1.jpeg',
    'img2.jpeg',
    'img3.jpeg',
    'img4.jpeg',
    'img5.jpeg'
];

const currentImage = document.getElementById('currentImage');
const thumbs = document.querySelectorAll('.thumb');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.querySelector('.close');

let currentIndex = 0;

// Thumbnail click event
thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateImage();
    });
});

// Next button click
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Previous button click
document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Update the main image
function updateImage() {
    currentImage.src = images[currentIndex];
    thumbs.forEach(thumb => thumb.style.opacity = '0.6');
    thumbs[currentIndex].style.opacity = '1';
}

// Main image click event to open in lightbox
currentImage.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImage.src = images[currentIndex];
});

// Close lightbox
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Click outside of lightbox to close
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImage) {
        lightbox.style.display = 'none';
    }
});

// Initialize
updateImage();
