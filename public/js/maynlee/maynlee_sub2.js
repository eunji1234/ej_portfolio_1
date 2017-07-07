$(function(){
    // nav 오픈
    $('.nav .menu').click(function(){
        $('.open_nav').stop().animate({
            'right':'0'
        },500)
        $('.header_btn i').css('color','#000')
        $('.nav .menu').css('display','none')
        $('.logo_b').css('display','block')
    })

    //nav 닫기
    $('.open_nav img').click(function(){
        $('.open_nav').stop().animate({
            'right':'-300px'
        },500)
        $('.header_btn i').css('color','#fff')
        $('.nav .menu').css('display','block')
        $('.logo_b').css('display','none')
    })


//-----------------------햄버거 hover--------------------
    $('.nav .menu').hover(function(){
        $('.nav .worms1').stop().animate({
            'left':'4%'
        },100)
        $('.nav .worms3').stop().animate({
            'left':'4%'
        },100)
    },function(){
        $('.nav .worms1').stop().animate({'left':'2%'},100)
        $('.nav .worms3').stop().animate({'left':'-2%'},100)
    })




    // 헤더 색변경
    $(window).scroll(function(){

         var sctt  = $(window).scrollTop();
         var cuee = $('.section-sub2').offset().top;


         if(cuee < sctt && !$('body').is('.on')){
             $('body').addClass('on')
             $('.logo_b').css('display','block')
             $('.header .header_btn i').css('color','#000')
             $('.header .menu a').css('color','#000')
             $('.header .hamburger span').css('border','1px #000 solid')
         }else if(cuee > sctt && $('body').is('.on')){
             $('body').removeClass('on')
             $('.logo_b').css('display','none')
             $('.header .header_btn i').css('color','#fff')
             $('.header .menu a').css('color','#fff')
             $('.header .hamburger span').css('border','1px #fff solid')

         }

    })

//----------------------------per-------------------------------
    // var spot = [];
    // var h = 0;
    //
    // $('.section2-top').each(function(i){
    //     var offt = $(this).offset().top;
    //     console.log(offt);
    //     spot.push(offt)
    //     $(this).css({
    //         'top':spot[i]
    //     })
    //     h += $(this).height();
    // })
    // //  $('.section-sub2').css('position','fixed')
    // //  $('.section2-reservation').css('position','fixed')
    //  $('.sub').height(h)
    // //
    // // $(window).scroll(function(){
    // //     var sct = $(this).scrollTop()
    // //     $('.section2-top').each(function(i){
    // //         var tt = spot[i]-sct
    // //         if(sct > spot[i]) tt *= 0.2
    // //         $(this).css('top',tt    )
    // //     })
    // // })
    // //

})
