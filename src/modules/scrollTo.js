export default {
  handleEvents() {
    const self = this;
  
    $('.js-scroll-to').on('click', function (e) {
      e.preventDefault();
      const selector = $(this).attr('data-target');
      const speed = $(this).attr('data-speed');
      const offset = $(this).attr('data-offset');
  
      self.scrollTo(selector, {
        speed,
        offset,
      });
    });
  },
  
  scrollTo(selector, { speed = 800, offset = 0 } = {}) {
    const $target = $(selector);
    if (!$target.length) return;
  
    dispatcher.dispatch({
      type: 'menu:close',
    });
  
    $([document.documentElement, document.body]).animate({
      scrollTop: $target.offset().top - offset,
    }, speed);
  },

  test() {
    const links = document.querySelectorAll('.js-scroll');
    console.log('links', links);
  }
}
