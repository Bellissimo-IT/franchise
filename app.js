

languageBlock = function() {
  document.getElementById('languageBlock').classList.toggle('active');
}

console.log(window.scrolY);

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

let floatForm = document.getElementById('float-form-bg'), cancel = document.getElementById('cancel'), floatFormCon = document.getElementById('float-form'), body = document.querySelector('body');

function activateFloat() {
  floatForm.classList.add('active');
  floatFormCon.classList.add('active');
  body.classList.add('fixed');
}

cancel.onclick = function() {
  floatForm.classList.remove('active');
  floatFormCon.classList.remove('active');
  body.classList.remove('fixed');
}

floatForm.onclick = function() {
  floatForm.classList.remove('active');
  floatFormCon.classList.remove('active');
  body.classList.remove('fixed');
}

let firstBarInfo = document.querySelectorAll('.first-bar-info'), secondBarInfo = document.querySelectorAll('.second-bar-info'), thirdBarInfo = document.querySelectorAll('.third-bar-info'), fourthBarInfo = document.querySelectorAll('.fourth-bar-info');

firstBarIn = function() {
  [].forEach.call(firstBarInfo, function(elem){
    elem.classList.add('active');
  })
}

firstBarOut = function() {
  [].forEach.call(firstBarInfo, function(elem){
    elem.classList.remove('active');
  })
}

secondBarIn = function() {
  [].forEach.call(secondBarInfo, function(elem){
    elem.classList.add('active');
  })
}

secondBarOut = function() {
  [].forEach.call(secondBarInfo, function(elem){
    elem.classList.remove('active');
  })
}


thirdBarIn = function() {
  [].forEach.call(thirdBarInfo, function(elem){
    elem.classList.add('active');
  })
}

thirdBarOut = function() {
  [].forEach.call(thirdBarInfo, function(elem){
    elem.classList.remove('active');
  })
}


fourthBarIn = function() {
  [].forEach.call(fourthBarInfo, function(elem){
    elem.classList.add('active');
  })
}

fourthBarOut = function() {
  [].forEach.call(fourthBarInfo, function(elem){
    elem.classList.remove('active');
  })
}

let languageList = document.querySelector('.languages-list'), languageContainer = document.getElementById('languageContainer');

languageContainer.onclick = function() {
  this.classList.toggle('active');
  languageList.classList.toggle('active');
}

// let unionSvg = document.querySelectorAll('.union-svg'), unionLenght = unionSvg.length;

// for(var i=1; i < 24; i++) {
//   [].forEach.call(unionSvg, function(elem){
//     doThis(elem);
//   })
// }

// function doThis(i) {
//   setTimeout(function(){i.classList.add('active'), 500})
// }

// document.addEventListener('DOMContentLoaded', function(){ 
//   var lis = Array.prototype.slice.call( document.querySelectorAll('.union-svg'));
//   var lis_count = lis.length;
//   var active_li_index = 0;
  
//   setInterval(function(){
//      var active_li = document.querySelector('.union-svg.active');
     
//      if( lis.indexOf(active_li) == lis_count-1 )
//        active_li_index  = 0;
//      else
//        active_li_index++;
       
//      document.querySelectorAll('.union-svg')[active_li_index].classList.add('active');
//   }, 300);
// }, false);


var options = {
  useEasing: true, 
  useGrouping: true, 
  separator: ',', 
  decimal: '.', 
};

var counterParent = document.getElementById('unique-id');
var children = counterParent.children;

function countStart(){
$('#unique-id').addClass('active');
  for (var i = 0; i < children.length; i++) {
       var item = document.getElementById(children[i].id).querySelector('.counter');
       var countValue = item.getAttribute('data-value');

      var countUP = new CountUp(item, 0, countValue, 0, 4, options);
      if (!countUP.error) {
          countUP.start();
      }
  }
}

ScrollReveal().reveal('.counter-block', { 
  beforeReveal: countStart
});	