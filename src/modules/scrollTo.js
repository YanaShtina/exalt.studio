export default {

  scrollTo(target, { speed = 800, offset = 0 } = {}) {
    const toTarget = document.querySelector(`.${target}`);

    if (!toTarget) return;
    console.log('scrollTo', toTarget.offsetTop);
  },

  test() {
    const links = document.querySelectorAll('.js-scroll');
    let self = this;
    links.forEach((link) => {
      
    link.addEventListener('click', function (e) {
      const target = this.dataset.target;
      console.log('self', target, this.offsetTop);
      self.scrollTo(target);
    })
    });
  },
}
