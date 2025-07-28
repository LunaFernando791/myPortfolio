document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Si solo quieres que se anime una vez
      }
    });
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
});



//CARRUSEL

let currentIndex = 0;
    let images = [];

    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      document.body.classList.toggle('bg-white');
      document.body.classList.toggle('text-gray-800');
    }

    function openCarousel(imgs) {
      images = imgs;
      currentIndex = 0;
      document.getElementById('carouselImage').src = images[currentIndex];
      document.getElementById('modal').classList.remove('hidden');
      document.getElementById('modal').classList.add('flex');
    }

    function closeCarousel() {
      document.getElementById('modal').classList.remove('flex');
      document.getElementById('modal').classList.add('hidden');
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      document.getElementById('carouselImage').src = images[currentIndex];
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      document.getElementById('carouselImage').src = images[currentIndex];
    }
