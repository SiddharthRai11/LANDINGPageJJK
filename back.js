// Smooth scrolling when clicking on scroll-down link
document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('a.scroll-down');
  
  scrollLinks.forEach(link => {
      link.addEventListener('click', event => {
          event.preventDefault();
          
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});
