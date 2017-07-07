$(function(){
//-----------------------gnb------------------------------
$('.header .logo_b').css('display','block')
$('.nav .menu .hamburger span').css('border','1px #000 solid')
$('.header_btn i').css('color','#000')
$('.nav .menu a').css('color','#000')


$('.nav .menu').click(function(){
    $('.open_nav').stop().animate({
        'right':'0'
    },500)
    $('.nav .menu').css('display','none')
})
$('.open_nav img').click(function(){
    $('.open_nav').stop().animate({
        'right':'-300px'
    },500)
    $('.nav .menu').css('display','block')
})



//----------------------섹션 이벤트 --------------------------------------
    $('body').mousemove(function(e){
        var x = e.pageX - $(this).width()/2
        var y = e.pageY - $(this).height()/2

        $('.collection-sub4 .x').css({
            'transform':'translate('+x/25+'px,'+y/25+'px)'
        })
        $('.collection-sub4 .y').css({
            'transform':'translate('+x/18+'px,'+y/18+'px)'
        })

    })



})
