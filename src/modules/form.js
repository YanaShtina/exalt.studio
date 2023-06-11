export default {
  init() {
    $('.form__left').on('submit', (e) => {
      e.preventDefault();
    
      let action = $(e.currentTarget).attr('action');
      console.log('action!', action);
      let th = $(e.currentTarget);
      
    
      $.ajax({
        type: 'POST',
        url: action,
        data: th.serialize()
      }).done(function(){
        console.log('Отправлено!');
      });
    });
   
  }
}