$(function(){

// 헤더 색깔
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


// 컬렉션 이벤트
    $('body').mousemove(function(e){
        var x = e.pageX - $(this).width()/2
        var y = e.pageY - $(this).height()/2

        $('.collection-sub1 .x').css({
            'transform':'translate('+x/20+'px,'+y/20+'px)'
        })
        $('.collection-sub1 .y').css({
            'transform':'translate('+x/12+'px,'+y/12+'px)'
        })

    })

// 슬라이드 다운, 스크롤
    $('.slide-down a').click(function(){
        $('html, body').stop().animate({'scrollTop':'950px'}, 600)
    })

    $('.totop a').click(function(){
        $('html, body').stop().animate({'scrollTop': 0}, 600);

    })


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

    //--------------------JSON------------------------------------------------
    $.getJSON('maynlee_sub1.json',function(maynlee_sub1){
        for(i=0; i < $('.collection-sub1').length; i++){
            var html = "";

            html += '<a href ="+maynlee_sub1_collection.html?seq='+i+'">';
            html += '<img src="../public/images/maynlee/images/Primor1.jpg" alt="">';
            html += '<span>';
            html += '<a href="">';
            html += '<h6>WEDDING RING, ＇NEW＇</h6>';
            html += '<H2>PRIMOR</H2></a>';
            html += '</span>';
            html += '</a>';
        }

        var seq = location.href;
        seq = seq.split('?');
        seq = seq[1].split('=');

        $('.col_img').css('background-image','url("'+maynlee_sub1.product[seq[1]].colimg+'")')
        $('.product_main img').css('background-image','url("'+maynlee_sub1.product[seq[1]].product_main+'")')
        $('.product_ex p').each(function(i,e){
            $(this).append(maynlee_sub1.product[seq[1]].product_ex[i])
        })
        $('.product_info td').each(function(i){
            $(this).append(maynlee_sub1.product[seq[1]].product_info[i])
        })

        $('.product_imglist li').each(function(i){
            $(this).css('background-image','url("'+maynlee_sub1.product[seq[1]].product_imglist[i]+'")')
        })
        $('.col_product h4').append(maynlee_sub1.product[seq[1]].h4)

    })

    //--------------li 이미지 팝업----------------
    $('.product_imglist li').click(function(){
        var bgimg = $(this).css('background-image')
            $('.product_imglist .popimg').css({
                'display':'block',
                'background-image':bgimg
            })
    })

    $('.product_imglist .popimg .close_btn').click(function(){
        $('.product_imglist .popimg').css({
            'display':'none'
        })
    })

})
