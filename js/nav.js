// nav 스크롤 색 변경
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $("#web-nav").css("background" , "#FFFFFF");
            $(".navli").attr("style", "color: #000000 !important");
            $("#web-nav").css("border-bottom" , "0.1px solid #c9c9c9");
        }
        else {
            $("#web-nav").css("background" , "#00ff0000");
            $(".navli").attr("style", "color: #FFFFFF !important");
            $("#web-nav").css("border-bottom" , "0");
        }
    })
})


