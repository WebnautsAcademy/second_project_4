$(document).ready(function(){
    $('.main__item-title').click(function(){
        $(this).next('.main__item-text').slideToggle(200);
        $(this).toggleClass('main__item-title--active'); 
      
    });
});
