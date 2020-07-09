function onChangeBtn(value) {
    /* 버튼 클릭시 designList Class(ul-tag) 삭제 */
    $('.designList').remove()

    /* 반지 버튼 click */
    if(value == 'ring') {
        $('#ring').css('background-color', '#5C5C5C');
        $('#ring').css('color', 'white');
        $('#bracelet').css('background-color', '#e8e5de');
        $('#bracelet').css('color', 'black');
        onChangeDesign('ring');
    }

    /* 팔찌 버튼 click */
    else if(value == 'bracelet') {
        $('#ring').css('background-color', '#e8e5de');
        $('#ring').css('color', 'black');
        $('#bracelet').css('background-color', '#5C5C5C');
        $('#bracelet').css('color', 'white');
        onChangeDesign('bracelet');
    }
}

function onChangeDesign(value) {
    let ringImage = ['img/design-img/ring01.png', 'img/design-img/ring02.png', 'img/design-img/ring03.png', 'img/design-img/ring04.png', 'img/design-img/ring05.png', 'img/design-img/ring06.png', 'img/design-img/ring07.png', 'img/design-img/ring08.png', 'img/design-img/ring09.png', '#'];
    let ringDetail = ['인기 반지 1위','인기 반지 2위','인기 반지 3위','인기 반지 4위','인기 반지 5위','인기 반지 6위','인기 반지 7위','인기 반지 8위','인기 반지 9위', '#'];
    let braceletImage = ['img/design-img/bracelet01.png', 'img/design-img/bracelet02.png', 'img/design-img/bracelet03.png', 'img/design-img/bracelet04.png', 'img/design-img/bracelet05.png', 'img/design-img/bracelet06.png', 'img/design-img/bracelet07.png', 'img/design-img/bracelet08.png', 'img/design-img/bracelet09.png', '#'];
    let braceletDetail = ['인기 팔찌 1위','인기 팔찌 2위','인기 팔찌 3위','인기 팔찌 4위','인기 팔찌 5위','인기 팔찌 6위','인기 팔찌 7위','인기 팔찌 8위','인기 팔찌 9위', '#'];
    let image = [];
    let detail=[];
    
    if(value == 'ring') {
        image = [...ringImage];
        detail = [...ringDetail];
    }
    else if(value == 'bracelet') {
        image = [...braceletImage];
        detail = [...braceletDetail];
    }

    $('.designView').append('<ul class=designList>');

    for(var i = 1; i <= 10; i++) {
        $('.designList').append('<li class=design0'+i+'>');
    }

    for(var i = 1; i <= 10; i++) {
        $('.design0'+i).append("<dl><dt><img class=image"+i+"></dt><dd><span class=descriptions"+i+"></span></dd></dl>");
        $('.image'+i).attr({
            src: image[i-1],
            width: '380px',
            height: '380px',
            alt: '인기 디자인 '+i+'위'
        });
        $('.descriptions'+i).append(detail[i-1]);
    }
}