import IMask from 'imask';

export default {
  init() {
    $('.form__left').on('submit', (e) => {
      e.preventDefault();
    
      let action = $(e.currentTarget).attr('action');
      console.log('action!', action);
      let th = $(e.currentTarget);
      console.log('th!', th);
      
    
      $.ajax({
        type: 'POST',
        url: action,
        data: th.serialize()
      }).done(function(){
        console.log('Отправлено!');
      });
    });

    const masks = document.querySelector('.js-tel');
    // console.log('sdfdf', masks);

    if (!masks) return;

    const maskOptions = {
      mask: '+{7}(000)000-00-00'
    };

    const mask = IMask(masks, maskOptions);
   
  }
}