$(function(){
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

})
