

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
  
    function showSlide(index) {
      const offset = -index * 100;
      document.querySelector('.slider').style.transform = `translateX(${offset}vw)`;
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });
  
    setInterval(nextSlide, 3000);
  });

  
