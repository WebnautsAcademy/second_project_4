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
    const menuOpen = document.querySelector('.header__burger');
    const menuClose = document.querySelector('.navigation__close');
    
    menuOpen.addEventListener("click", ()=>{
      header.classList.remove('header--close')
    });
    menuClose.addEventListener("click", ()=>{
      header.classList.add('header--close')
    });
});

const swiper = new Swiper(".swiper-container", {
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

  