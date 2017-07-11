
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

    // 메뉴 li
    $('.open_nav li').each(function(){
        $(this).click(function(){
            $('.open_nav li span').slideDown()
        })
    })

    // nav 닫기
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

 //---------------------------section img animate-------------------------------------------




 //------------------------backTOTop,slide-down----------------------------------------------


    $('.totop a').click(function(){
        $('html, body').stop().animate({'scrollTop': 0}, 600);

    })

    $('.slide-down a').click(function(){
        $('html, body').stop().animate({'scrollTop':'950px'}, 600)
    })

 //--------------------슬라이드 배너--------------------------------------------------
 var idx = 0;

      function movemuent(start,end,target){
          $('.album-wrap li').eq(target).css({
             'left':start,
             'display':'block'
         }).animate({
             'left':end
         })
     }

     $('.bt-roll .flaticon-arrows-right').click(function(){
         movemuent("0","-100%",idx);
         idx++
         movemuent("100%","0",idx);

         if(idx ==$('.album-wrap li').length){
             idx = 0
              movemuent("100%","0",idx);
         }
         })
         $('.bt-roll .flaticon-arrows-right').trigger('click')

    $('.bt-roll .flaticon-arrows-left').click(function(){
        movemuent('0','100%',idx);
        idx--
        movemuent('-100%','0',idx);

        if(idx < 0){
            idx == 2
            movemuent('100%','0',idx)
        }
    })







 //-------------------------스크롤 색변경---------------------------------------------

   $(window).scroll(function(){

        var scted  = $(window).scrollTop();
        var cue = $('.slide-down').offset().top;

        if(cue < scted && !$('body').is('.on')){
            $('body').addClass('on')
            $('.logo_b').css('display','block')
            $('.header .header_btn i').css('color','#000')
            $('.header .menu a').css('color','#000')
            $('.header .hamburger span').css('border','1px #000 solid')
        }else if(cue > scted && $('body').is('.on')){
            $('body').removeClass('on')
            $('.logo_b').css('display','none')
            $('.header .header_btn i').css('color','#fff')
            $('.header .menu a').css('color','#fff')
            $('.header .hamburger span').css('border','1px #fff solid')
        }

   })

 //----------------------------------------------------------------------

}) //끝
