$(document).ready(function(){
    $('.content__item-title').click(function(){
        $(this).next('.content__item-text').slideToggle(200);
        $(this).toggleClass('content__item-title--active ');     
    });


    // window.addEventListener('scroll', function(){
    //   $('.footer__item').each(function(i, el){
    //     const oldLeft = $(el).css('left').slice(0,-2)
    //     console.log(i % 2 !== 0);
    //     if (i % 2 !== 0) {
    //       $(el).css('left', Number(oldLeft) - 20)
    //     } else {
    //       $(el).css('left', Number(oldLeft) + 20)
    //     }
    //   })
    // })
 
   
    const header = document.querySelector('.header');  
    const body = document.querySelector('.body') ;

    const logo  = document.querySelector('.header__logo-dark');    
    const logoLight = document.querySelector('.header__logo-light'); 

    const menuOpen = document.querySelector('.header__burger');
    const menuClose = document.querySelector('.navigation__close');

    const switchBtn = document.querySelector('.header__switch');
    const switchDark = document.querySelector('.header__switch-icon');
    const switchLight = document.querySelector('.header__switch-icon-night');

    const listSvgDark = document.querySelectorAll('.content__icon--dark');
    const listSvgLight = document.querySelectorAll('.content__icon--light');
    
    
    menuOpen.addEventListener("click", ()=>{
      header.classList.remove('header--close')
    });
    menuClose.addEventListener("click", ()=>{
      header.classList.add('header--close')
    });

    switchBtn.addEventListener("click", ()=>{
      body.classList.toggle('body--light-theme');
      if(body.classList.contains("body--light-theme")){
        switchDark.style.display = 'none';
        switchLight.style.display = 'block';

        logo.style.display = 'none';
        logoLight.style.display = 'block';

     
        for (var i = 0; i < listSvgDark.length; i++) {      
          listSvgDark[i].style.display = 'none';  
          listSvgLight[i].style.display = 'block';               
        }
      
      }
      else{
        switchDark.style.display = 'block';
        switchLight.style.display = 'none';

        logo.style.display = 'block';
        logoLight.style.display = 'none';

        for (var i = 0; i < listSvgLight.length; i++) {      
          listSvgLight[i].style.display = 'none';    
          listSvgDark[i].style.display = 'block';  
                 
        }
      
      }
    });

if(document.documentElement.clientWidth >= 576) {

const swiper = new Swiper(".gallery__slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
  });

  const swiperDecor = new Swiper(".swiper__decor", {
    nested:true,
     loop: true,
    autoplay: {
      delay: 1000,   
    },
    slidesPerView: 'auto',
    // loopedSlides: 10,
    // initialSlide: 0,
  });

    const swiperProject = new Swiper(".project-swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },     
  });
  
}
if(document.documentElement.clientWidth <= 768){
  const swiperMobileTeam = new Swiper('.gallery__team-slider', {   
    slidesPerView: 3,
    spaceBetween: 30,
  });
}
if(document.documentElement.clientWidth <= 576) {
  const swiperMobileInfo = new Swiper('.gallery__info-slider',{
    slidesPerView: 2,
    spaceBetween: 30,
  });
  const swiperMobileTeam = new Swiper('.gallery__team-slider', {   
    slidesPerView: 2,
    spaceBetween: 30,
  });
  const swiperProject = new Swiper(".project-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
  });
  const swiperMobileReview = new Swiper(".review__container-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
  });
}
});