$(document).ready(function(){
    $('.content__item-title').click(function(){
        $(this).next('.content__item-text').slideToggle(200);
        $(this).toggleClass('content__item-title--active'); 
      
    });
});
