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


