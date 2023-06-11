import Swiper, { Pagination } from 'swiper';

export default {
  init() {
    const breakpoint = window.matchMedia( '(max-width: 1023px)' );
/*     console.log('breakpoint', breakpoint.matches) */
    const swiper = new Swiper('.swiper', {
      // configure Swiper to use modules
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

      breakpoints: {
        // when window width is >= 640px
        767: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }

    });

    if (breakpoint.matches === true) {
      swiper.destroy();

      const hiddenSlide = document.querySelector('.process__slide._2');

      hiddenSlide.classList.add('hidden');
      const openBtn = document.querySelector('.more');
      

      openBtn.addEventListener('click', () => {
        hiddenSlide.classList.remove('hidden');
        openBtn.style.display = 'none';
      })
    }
  }
}