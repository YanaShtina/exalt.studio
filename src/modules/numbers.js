export default {
  init() {
    const numbers = document.querySelectorAll('.numbers__item-number');
    const number_1 = numbers[0];
    const number_2 = numbers[1];
    const number_3 = numbers[2];


    console.log('number_2', number_2)


    

    if (!number_1) return;
    const numberTop = number_1.getBoundingClientRect().top;

    let start = +number_1.innerHTML;
    let end = +number_1.dataset.max;

    window.addEventListener('scroll', function onScroll() {
      // console.log('dff', window.pageYOffset, numberTop, window.innerHeight)
      if(window.pageYOffset > numberTop - window.innerHeight / 1.05) {
        this.removeEventListener('scroll', onScroll);
        const interval = setInterval(function() {

          number_1.innerHTML = ++start;
          if(start === end) {
            clearInterval(interval);
          }
        }, 1000);
      }
    });

    let start_2 = +number_2.innerHTML;
    let end_2 = +number_2.dataset.max;
    console.log('number_2', number_2, start_2, end_2)

    window.addEventListener('scroll', function onScroll() {
      // console.log('dff', window.pageYOffset, numberTop, window.innerHeight)
      if(window.pageYOffset > numberTop - window.innerHeight / 1.05) {
        this.removeEventListener('scroll', onScroll);
        const interval = setInterval(function() {

          number_2.innerHTML = ++start_2;
          if(start_2 === end_2) {
            clearInterval(interval);
          }
        }, 5);
      }
    });


    let start_3 = +number_3.innerHTML;
    let end_3 = +number_3.dataset.max;
    console.log('number_2', number_3, start_3, end_3)

    window.addEventListener('scroll', function onScroll() {
      // console.log('dff', window.pageYOffset, numberTop, window.innerHeight)
      if(window.pageYOffset > numberTop - window.innerHeight / 1.05) {
        this.removeEventListener('scroll', onScroll);
        const interval = setInterval(function() {

          number_3.innerHTML = ++start_3;
          if(start_3 === end_3) {
            clearInterval(interval);
          }
        }, 2);
      }
    });

  }
}