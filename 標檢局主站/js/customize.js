$(function(){$(".singleSlider").slick({dots:!0,arrow:!0,infinite:!0,speed:500,autoplay:!0,fade:!0,pauseOnHover:!0,cssEase:"ease"}),$(".lazy").slick({dots:!0,infinite:!0,speed:300,autoplay:!1,slidesToShow:1,pauseOnHover:!0,adaptiveHeight:!0}),$(".tiny").slick({dots:!0,infinite:!0,speed:300,autoplay:!1,slidesToShow:1,pauseOnHover:!0,adaptiveHeight:!0}),$(".adSlider").slick({dots:!1,infinite:!0,speed:300,slidesToShow:5,slidesToScroll:1,autoplay:!0,pauseOnHover:!0,arrow:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,dots:!1,arrows:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,arrows:!0}},{breakpoint:575,settings:{slidesToShow:2,slidesToScroll:2,arrows:!0}}]}),$(".cp_slider").slick({dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:3,autoplay:!1,autoplaySpeed:1500,pauseOnHover:!0,pauseOnFocus:!0,focusOnSelect:!0,accessibility:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{arrows:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{arrows:!0,slidesToShow:1,slidesToScroll:1}}]}),$(".Slider-for").on("init reInit afterChange",function(e,t,i){var s=(i||0)+1;$(".controls").html(s+"/"+t.slideCount)}),$(".Slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,asNavFor:".Slider-nav",autoplay:!0,autoplaySpeed:2e3,infinite:!0}),$(".Slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".Slider-for",dots:!0,arrows:!0,focusOnSelect:!0,infinite:!0});var i=$(".chart_menu").find("li").height(),s=$(".chart_menu").find("li").length,a=!1;$(".chart .container").append('<button type="button" class="chart_btn">圖表開關</button>'),$(window).on("load resize",function(e){ww=$(window).width(),ww<768&&($(".chart_menu").css("bottom",i*(s-1)*-1),$(".chart_btn").off().on("click touchend",function(e){a=a?($(this).removeClass("active"),$(".chart_menu").animate({bottom:i*(s-1)*-1},800,"easeOutQuint"),!1):($(this).addClass("active"),$(".chart_menu").animate({bottom:0},800,"easeOutQuint"),!0),e.preventDefault();var t=e.target;$(t).is(".chart_btn")||($(this).removeClass("active"),$(".chart_menu").animate({bottom:i*(s-1)*-1},800,"easeOutQuint"),a=!1)})),$(".chart_menu").find("li:first a").trigger("click")}),$(window).resize();var t=$(".step_block").children('div[class^="step"]');t.each(function(e,t){$(this).append('<a class="next">前往下一個步驟</a>')});var o=t.length;$(".next").off().click(function(){var e=$(this).parents().index('div[class^="step"]');o<=e&&(e=0),$("html, body").stop(!0,!1).animate({scrollTop:t.eq(e).offset().top},700,"easeOutExpo")}),$(".gotoStep").click(function(){$("html, body").stop(!0,!1).animate({scrollTop:$(".step_block").offset().top},700,"easeOutExpo")});$(".method").find('div[class^="method_"]').length;var e=$(".choose ul li").find(".active").parents("li").index();$(".method").find('div[class^="method_"]').hide(),$(".method").find('div[class^="method_"]').eq(e).show(),$(".choose ul li").find("a").each(function(e,t){$(this).off().click(function(e){$(this).parents().siblings().find("a").removeClass("active"),$(this).addClass("active"),e.preventDefault();var t=$(this).parents("li").index();$(".method").find('div[class^="method_"]').hide(),$(".method").children('div[class^="method_"]').eq(t).fadeIn()})}),$selector=$(".sp_mainImage .container"),XAngle=0,YAngle=0,Z=0,$selector.on("mousemove",function(e){var t=$(this),i=e.pageX-t.offset().left,s=e.pageY-t.offset().top,a=t.width();YAngle=20*-(.5-i/a),XAngle=20*(.5-s/a),function(e){e.css({transform:"perspective(525px) translateZ("+Z+"px) rotateX("+XAngle+"deg) rotateY("+YAngle+"deg)",transition:".3s ease-out","-webkit-transition":".3s ease-out"})}(t.children(".image"))}),$selector.on("mouseleave",function(){oLayer=$(this).children(".image"),oLayer.css({transform:"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)",transition:"all 1s ease-out .3s","-webkit-transition":"all 1s ease-out .3s"})}),$(".service_choose ul li a").each(function(e,t){$(this).click(function(e){$(this).parents("ul").find("a").removeClass("active"),$(this).addClass("active")})}),$(".advanced_search_bar").siblings(".advanced_search").hide(),$(".btn_advanced_search").off().click(function(e){$(".advanced_search").stop().slideToggle()}),$(".category").find("a").off().click(function(e){$(this).parent("li").siblings().find("a").removeClass("active"),$(this).addClass("active")});var n=$("html").attr("lang");"zh"==n.substring(0,2)?($(".slick-prev").attr("title","上一筆"),$(".slick-next").attr("title","下一筆")):"en"==n.substring(0,2)?($(".slick-prev").attr("title","previous"),$(".slick-next").attr("title","next")):"vi"==n.substring(0,2)?($(".slick-prev").attr("title","Trước"),$(".slick-next").attr("title","kế tiếp")):"id"==n.substring(0,2)?($(".slick-prev").attr("title","sebelumnya"),$(".slick-next").attr("title","berikutnya")):"km"==n.substring(0,2)?($(".slick-prev").attr("title","មុន"),$(".slick-next").attr("title","បន្ទាប់")):"th"==n.substring(0,2)?($(".slick-prev").attr("title","ก่อน"),$(".slick-next").attr("title","ต่อไป")):($(".slick-prev").attr("title","previous"),$(".slick-next").attr("title","next"))});
$(function() {
    /*------------------------------------*/
    /////////////字型大小 font-size//////////
    /*------------------------------------*/
    $('.font_size').find('.small').click(function(e) {
        $(this).parent('li').siblings('li').find('a').removeClass('active');
        $('.innerpage').removeClass('large_size').addClass('small_size');
        $(this).blur().addClass('active');
        e.preventDefault();
        createCookie('FontSize', 'small', 356);
    });
    $('.font_size').find('.medium').click(function(e) {
        $(this).parent('li').siblings('li').find('a').removeClass('active');
        $('.innerpage').removeClass('large_size small_size');
        $(this).blur().addClass('active');
        e.preventDefault();
        createCookie('FontSize', 'medium', 356);
    });
    $('.font_size').find('.large').click(function(e) {
        $(this).parent('li').siblings('li').find('a').removeClass('active');
        $('.innerpage').removeClass('small_size').addClass('large_size');
        $(this).blur().addClass('active');
        e.preventDefault();
        createCookie('FontSize', 'large', 356);
    });

    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            var expires = '; expires=' + date.toGMTString();
        } else expires = '';
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    function readCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    window.onload = function(e) {
        var cookie = readCookie('FontSize');
        //alert('cookie='+cookie);
        if (cookie == 'small') {
            //$('.font_size').find('.small').click();
            $('.font_size').find('.small').parent('li').siblings('li').find('a').removeClass('active');
            $('.innerpage').removeClass('large_size medium_size').addClass('small_size');
            $('.font_size').find('.small').addClass('active');
            e.preventDefault();
        } else {
            if (cookie == 'large') {
                //$('.font_size').find('.large').click();
                $('.font_size').find('.large').parent('li').siblings('li').find('a').removeClass('active');
                $('.innerpage').removeClass('small_size medium_size').addClass('large_size');
                $('.font_size').find('.large').addClass('active');
                e.preventDefault();
            } else {
                //這裡是預設宣告
                //$('.font_size').find('.medium').click();
                $('.font_size').find('.medium').parent('li').siblings('li').find('a').removeClass('active');
                $('.innerpage').removeClass('large_size small_size');
                $('.font_size').find('.medium').addClass('active');
                e.preventDefault();
            }
        }
    };
})