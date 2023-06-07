export default {
  init() {
    let openPopupButtons = document.querySelectorAll('.open-popup'); 

    openPopupButtons.forEach((button) => { 
      button.addEventListener('click', (e) => { 
          e.preventDefault();
          const type = button.dataset.type;
          const popupBg = document.querySelector(`.popup__bg.${type}`); 
          let popup = popupBg.querySelector('.popup'); 
          
          popupBg.classList.add('active'); 
          popup.classList.add('active'); 

          let closePopupButton = popupBg.querySelector('.close-popup');


          closePopupButton.addEventListener('click',() => { 
            popupBg.classList.remove('active'); 
            popup.classList.remove('active'); 
        });
      
          document.addEventListener('click', (e) => { 
            if(e.target === popupBg) { 
                popupBg.classList.remove('active'); 
                popup.classList.remove('active'); 
            }
          });
      })
  });
  },
}