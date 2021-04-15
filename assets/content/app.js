
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1.1,
        spaceBetween: 10,
        centeredSlides: false,
        pagination: {
          el: '.swiper-pagination',
        },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
      1250: {
        
        slidesPerView: '2',
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
      }
    },
    on: {
      slideChange: function () {
        var activeIndex = this.activeIndex;
        var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
       $('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
       $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().addClass('swiper-slide-nth-prev-2');
       $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().addClass('swiper-slide-nth-next-2');
      },
    }
  });

// let scroll = window.scrollY;

// if (scroll >= 70) {
//   document.getElementById('nav-items-container').classList.add('fixed');
// }

let navItem = document.querySelector('nav'), navItemsCon = document.getElementById('nav-items-container'), header = document.querySelector('header');

function scroll() {

  if(window.scrollY >= 70) {
    navItem.classList.add('fixed');
    navItemsCon.classList.add('fixed');
    header.classList.add('fixed');
  }
  else {
    navItem.classList.remove('fixed');
    navItemsCon.classList.remove('fixed');
    header.classList.remove('fixed');
  }
}

let barLine = document.querySelectorAll(".bar-line"), barInfo = document.querySelectorAll(".bar-info");

barLine.onclick = function() {
  this.addClass("active");
  this.next().addClass("active");
}


let navCon = document.getElementById("nav-items-container"), burger = document.getElementById("burger"), burgerCancel = document.getElementById("burger-cancel");

burger.onclick = function() {
  navCon.classList.add('active');
}

burgerCancel.onclick = function() {
  navCon.classList.remove('active');
}

let floatForm = document.getElementById('float-form-container'), cancel = document.getElementById('cancel');

function activateFloat() {
  floatForm.classList.add('active');
}

cancel.onclick = function() {
  floatForm.classList.remove('active');
}