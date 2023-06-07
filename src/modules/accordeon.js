export default {
  init() {
    const qs = document.querySelectorAll('.faq__item');

    qs.forEach(q => {
      q.addEventListener('click', () => {
        q.classList.toggle('active');
      })
    })
  },
}