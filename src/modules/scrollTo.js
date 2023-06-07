export default {
  scroll() {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach(link => {

      link.addEventListener('click', function(e) {
          e.preventDefault();
          const target = this.dataset.target;
          const scrollTarget = document.querySelector(`.${target}`);


          const isMobile = document.querySelector('.scrollto').classList.contains('active');
          let topOffset;

          if (!isMobile) {
            topOffset = document.querySelector('.scrollto').offsetHeight;
          } else {
            const header = document.querySelector('.header');
            header.classList.remove('active');
            topOffset = 50;
          }

          // const topOffset = 0; // если не нужен отступ сверху 
          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;

          console.log('target', isMobile);

          window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth'
          });
      });
    })
  },
}
