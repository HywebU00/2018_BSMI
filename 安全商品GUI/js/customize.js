//自行加入的JS請寫在這裡
;
$(function() {
    $('.singleSlider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'ease'
    });
    $('.adSlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }]
    });
    // 懶人包
    $('.lazy_pic').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    //影音專區
    $('.video_pic').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    // $(window).bind("load resize", function(e) {
    //     var WindowWidth = $(window).width();
    //     var cellDiv1 = $('.col-2').find('.col');
    //     var highestBox = 0;
    //     if (WindowWidth >= 992) {
    //         $(".col-2 .container").each(function() {
    //             $(cellDiv1, this).each(function() {
    //                 if ($(this).height() > highestBox) {
    //                     highestBox = $(this).height();
    //                 }
    //             });
    //             $(cellDiv1, this).height(highestBox);
    //         });
    //     }else{
    //         cellDiv1.removeAttr('style');
    //     }
    // });
    /*-----------------------------------*/
    /////click event to scroll to top//////
    /*-----------------------------------*/
    $('.gotonext').click(function(e) {
        $('html, body').animate({ scrollTop: $('.slider').offset().top }, 800, 'easeOutQuart');
        return false;
    });
    /*-----------------------------------*/
    /////////////////   chart. ///////////
    /*-----------------------------------*/
    var chart_li_H = $('.chart_menu').find('li').height(),
        chart_Length = $('.chart_menu').find('li').length,
        chart_H = chart_li_H * chart_Length,
        chart_check = false;
    $('.chart .container').append('<button type="button" class="chart_btn">圖表開關</button>')
    $(window).bind("load resize", function(event) {
        ww = $(window).width();
        if (ww < 768) {
            $('.chart_menu').css('bottom', -1 * (chart_li_H * (chart_Length - 1)));
            $('.chart_btn').off().on('click touchend', function(event) {
                if (!chart_check) {
                    $(this).addClass('active');
                    $('.chart_menu').animate({
                        bottom: 0
                    }, 800, 'easeOutQuint');
                    chart_check = true;
                    event.preventDefault();
                } else {
                    $(this).removeClass('active');
                    $('.chart_menu').animate({
                        bottom: -1 * (chart_li_H * (chart_Length - 1))
                    }, 800, 'easeOutQuint');
                    chart_check = false;
                    event.preventDefault();
                }
                var target = event.target;
                if (!$(target).is('.chart_btn')) {
                    $(this).removeClass('active');
                    $('.chart_menu').animate({
                        bottom: -1 * (chart_li_H * (chart_Length - 1))
                    }, 800, 'easeOutQuint');
                    chart_check = false;
                }
            });
        }
    });
    /*-----------------------------------------------*/
    /////////////////  有內頁，控制header底色 ///////////
    /*-----------------------------------------------*/
    $('.innerpage').siblings('header').css('background', '#1d6e79');
    $('.innerpage').siblings('header').find('.menu').css('border', 'none');
    /*-----------------------------------------------*/
    ///////////////////////  字型大小  /////////////////
    /*-----------------------------------------------*/
    $('.fontsize a.smallFont').click(function(event) {
        $(this).parent().siblings('li').find('a').removeClass();
        $(this).addClass('active');
        $('.main').removeClass('largeFont').removeClass('mediumFont').addClass('smallFont');
    });
    $('.fontsize a.mediumFont').click(function(event) {
        $(this).parent().siblings('li').find('a').removeClass();
        $(this).addClass('active');
        $('.main').removeClass('largeFont').removeClass('smallFont').addClass('mediumFont');
    });
    $('.fontsize a.largeFont').click(function(event) {
        $(this).parent().siblings('li').find('a').removeClass();
        $(this).addClass('active');
        $('.main').removeClass('mediumFont').removeClass('smallFont').addClass('largeFont');
    });
    /*-----------------------------------------------*/
    ///////////////////////  cp slick  ////////////////
    /*-----------------------------------------------*/
    $('.cp_slider').find('a').focus(function(e) {
        $(this).css('outline', '1px solid RED');
    });
    $('.cp_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.Slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
    });
    // 進階搜尋
    $('.advanced_search').hide();
    $('.btn_advanced_search').off().click(function(event) {
        $('.advanced_search').stop().slideToggle();
    });
    // 進階查詢
    $('.advance_block').hide();
    $('.advance_search button').off().click(function(e) {
        $('.advance_block').stop(true, true).slideToggle();
    });
    // category
    $('.category').find('a').off().click(function(event) {
        $(this).parent('li').siblings().find('a').removeClass('active');
        $(this).addClass('active');
    });
});