const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

export default {
  init() {
    const workBtns = document.querySelectorAll('.works__item-link');
    const targetElement = document.querySelector('.popup');

    function isValidHttpUrl(string) {
      let url;
      
      try {
        url = new URL(string);
      } catch (_) {
        return false;  
      }
    
      return url.protocol === "http:" || url.protocol === "https:";
    }

    workBtns.forEach((b) => {
      b.addEventListener('click', function close(e) {
        e.preventDefault();
        const type = b.dataset.type;

        const isApple = function iOS() {
          return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
          ].includes(navigator.platform)
          // iPad on iOS 13 detection
          || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        }

        if (isValidHttpUrl(type) === true) {
          window.open(type, "_blank");
        } else {
          const popupBg = document.querySelector(`.popup__bg.${type}`); 
          let popup = popupBg.querySelector('.popup'); 

          console.log('works' , popupBg);
          
          popupBg.classList.add('active'); 
          popup.classList.add('active'); 

          if (!isApple()) {
            disableBodyScroll(targetElement);
          }
          

          let closePopupButton = popupBg.querySelector('.close-popup');


          closePopupButton.addEventListener('click',() => { 
            console.log('closePopupButton');
            popupBg.classList.remove('active'); 
            popup.classList.remove('active'); 
            enableBodyScroll(targetElement);
        });
      
          document.addEventListener('click', (e) => { 
            if(e.target === popupBg) { 
                popupBg.classList.remove('active'); 
                popup.classList.remove('active'); 
                enableBodyScroll(targetElement);
            }
          });
        }
       
      })
    })
  }
}