const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

export default {
  init() {
    const burger = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const targetElement = document.querySelector('.scrollto');

    burger.addEventListener('click', () => {
      if (header.classList.contains('active')) {
        header.classList.remove('active');
        enableBodyScroll(targetElement);
      } else {
        header.classList.add('active');
        disableBodyScroll(targetElement);
      }
    })
  },
}