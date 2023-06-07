import './index.scss';
import scroll  from './modules/scrollTo';
import burger  from './modules/burger';
import popup  from './modules/popup';
import accordeon  from './modules/accordeon';
import gsap  from './modules/gsap';
import numbers  from './modules/numbers';
import slider  from './modules/slider';


scroll.scroll();
burger.init();
popup.init();
accordeon.init();
gsap.init();
numbers.init();
slider.init();


/* import loginButton from './modules/login-button';


documentReady(() => {
  resize.init();

});

documentLoaded(() => {

}); */