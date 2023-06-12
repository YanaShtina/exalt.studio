import Typed from 'typed.js';

export default {
  init () {
   
    const from = document.querySelector('#typed');
    const to = document.querySelector('#typed-strings');


    console.log('dfdfdf', from, to);
    let typed = new Typed(from, { 
      stringsElement: to, 
      typeSpeed: 50, 
      startDelay: 50, 
      backSpeed: 50, 
      loop: false,
      startDelay: 1200,
      showCursor: false,
  });
  }
}