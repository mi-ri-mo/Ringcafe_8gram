function onChangeBtn(value) {
    /* 버튼 클릭시 designList Class(ul-tag) 삭제 */
    $('.designList').remove()

    /* 반지 버튼 click */
    if(value == 'ring') {
        $('#ring').css('background-color', '#5C5C5C');
        $('#ring').css('color', 'white');
        $('#bracelet').css('background-color', '#F1F1F1');
        $('#bracelet').css('color', 'black');
        onChangeDesign('ring');
    }

    /* 팔찌 버튼 click */
    else if(value == 'bracelet') {
        $('#ring').css('background-color', '#F1F1F1');
        $('#ring').css('color', 'black');
        $('#bracelet').css('background-color', '#5C5C5C');
        $('#bracelet').css('color', 'white');
        onChangeDesign('bracelet');
    }
}

function onChangeDesign(value) {
    let ringImage = ['img/design-img/test.PNG', 'img/design-img/test.PNG', 'img/design-img/test.PNG', 'img/design-img/test.PNG', 'img/design-img/test.PNG', 'img/design-img/test.PNG', 'img/design-img/test.PNG', 'img/design-img/test.PNG', 'img/design-img/test.PNG'];
    let ringDetail = ['제일 인기 있는 메탈 반지1','제일 인기 있는 메탈 반지2','제일 인기 있는 메탈 반지3','제일 인기 있는 메탈 반지4','제일 인기 있는 메탈 반지5','제일 인기 있는 메탈 반지6','제일 인기 있는 메탈 반지7','제일 인기 있는 메탈 반지8','제일 인기 있는 메탈 반지9'];
    let braceletImage = ['img/design-img/test1.PNG', 'img/design-img/test1.PNG', 'img/design-img/test1.PNG', 'img/design-img/test1.PNG', 'img/design-img/test1.PNG', 'img/design-img/test1.PNG', 'img/design-img/test1.PNG', 'img/design-img/test1.PNG', 'img/design-img/test1.PNG'];
    let braceletDetail = ['제일 인기 있는 팔찌1','제일 인기 있는 팔찌2','제일 인기 있는 팔찌3','제일 인기 있는 팔찌4','제일 인기 있는 팔찌5','제일 인기 있는 팔찌6','제일 인기 있는 팔찌7','제일 인기 있는 팔찌8','제일 인기 있는 팔찌9'];
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

    for(var i = 1; i < 10; i++) {
        $('.designList').append('<li class=design0'+i+'>');
    }

    for(var i = 1; i < 10; i++) {
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