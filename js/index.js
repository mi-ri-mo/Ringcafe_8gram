// nav 스크롤 색 변경
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $(".header").css("background" , "#FFFFFF"); // 흰색
    }
    else{
      $(".header").css("background" , "#00ff0000");   // 투명색
    }
  })
})


// sild 효과
let diff = 0;
let ticking = false;

const wheelEvent = 'onwheel' in document.createElement("div") ? 'wheel' : 'mousewheel';

// querySelector
const list = document.querySelector('.slide-ul');

function doSomething(diff) {
  list.scrollLeft += (diff);
}

list.addEventListener('wheel', function(e) {
  diff = e.deltaY;
  if (!ticking) {
    window.requestAnimationFrame(function() { //requestAnimationFrame으로 애니메이션 구현
      doSomething(diff);
      ticking = false;
    });
  }
  ticking = true;
}, { passive: true });



