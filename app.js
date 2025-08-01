document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Usa tu clase definida en styles.css
        observer.unobserve(entry.target); // Si solo quieres que se anime una vez
      }
    });
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
});




let currentIndex = 0;
let images = [];

function openCarousel(imgs, startIndex) {
  images = imgs;
  currentIndex = startIndex;
  document.getElementById('carouselImage').src = images[currentIndex];
  document.getElementById('modal').classList.add('active'); // Show modal
}

function closeCarousel() {
  document.getElementById('modal').classList.remove('active'); // Hide modal
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('carouselImage').src = images[currentIndex];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('carouselImage').src = images[currentIndex];
}

