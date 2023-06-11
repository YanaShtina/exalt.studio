const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

export default {
  init() {
    let openPopupButtons = document.querySelectorAll('.open-popup'); 
    const targetElement = document.querySelector('.popup');

    openPopupButtons.forEach((button) => { 
      button.addEventListener('click', (e) => { 
          e.preventDefault();
          const type = button.dataset.type;
          const popupBg = document.querySelector(`.popup__bg.${type}`); 
          let popup = popupBg.querySelector('.popup'); 
          
          popupBg.classList.add('active'); 
          popup.classList.add('active'); 
          disableBodyScroll(targetElement);

          let closePopupButton = popupBg.querySelector('.close-popup');


          closePopupButton.addEventListener('click',() => { 
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
      })
  });
  },
}