export default {
  init() {
    const numbers = document.querySelectorAll('.numbers__item-number');
    const number = document.querySelector('.numbers__item-number');

    if (!number) return;
    const numberTop = number.getBoundingClientRect().top;
  
    numbers.forEach((n) => {
      
     let start = +n.innerHTML;
     let end = +n.dataset.max;
    
      window.addEventListener('scroll', function onScroll() {
        // console.log('dff', window.pageYOffset, numberTop, window.innerHeight)
        if(window.pageYOffset > numberTop - window.innerHeight / 1.05) {
          this.removeEventListener('scroll', onScroll);
          const interval = setInterval(function() {
            n.innerHTML = ++start;
            if(start === end) {
              clearInterval(interval);
            }
          }, 2);
        }
      });
    })
  }
}