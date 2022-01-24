$(document).ready(function() {
    $("img").lazyload({
        effect: "fadeIn"
    });
    $('.mp_banner .singleSlider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });
    $('.lazy_pic').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.tiny').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.ad_banner .container').slick({
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
                arrows: false
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        }]
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
    var userAgent, ieReg, ie;
    userAgent = window.navigator.userAgent;
    ieReg = /msie|Trident.*rv[ :]*11\./gi;
    ie = ieReg.test(userAgent);
    if (ie) {
        $(".mp_banner .img-container").each(function() {
            var imgUrl = $(this).children('a').children('img').attr('src');
            var $container = $(this);
            $(this).has(".cover").find('a').addClass("ie-object-cover");
            $(this).has(".cover").find('a').css("backgroundImage", "url(" + imgUrl + ")");
            $(this).has(".fill").find('a').addClass("ie-object-fill");
            $(this).has(".fill").find('a').css("backgroundImage", "url(" + imgUrl + ")");
            $(this).has(".contain").find('a').addClass("ie-object-contain");
            $(this).has(".contain").find('a').css("backgroundImage", "url(" + imgUrl + ")");
        });
    }
    var chart_li_H = $('.chart_menu').find('li').height(),
        chart_Length = $('.chart_menu').find('li').length,
        chart_H = chart_li_H * chart_Length,
        chart_check = false;
    // console.log(chart_H);
    $('.chart .container').append('<button type="button" class="chart_btn">圖表開關</button>')
    $(window).on("load resize", function(event) {
        ww = $(window).outerWidth();
        if (ww < 768) {
            // fat_footer
            $('.fatfooter nav ul ul ').hide();
            $('.fatfooter nav>ul>li>a').each(function() {
                $(this).off().click(function(e) {
                    $('.fatfooter nav>ul>li>a').removeClass('active');
                    $(this).addClass('active');
                    $('.fatfooter nav ul ul ').stop(true, true).slideUp();
                    $(this).siblings('ul').stop(true, true).slideDown();
                    e.preventDefault();
                    return false;
                });
            });
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
        } else {
            $('.fatfooter nav>ul>li>a').removeClass('active');
            $('.fatfooter nav ul ul ').show();
        }
    }); //申辦業務總覽
    $('.service_choose ul li a').each(function(index, el) {
        $(this).click(function(e) {
            $(this).parents('ul').find('a').removeClass('active');
            $(this).addClass('active');
        });
    });
    $(window).on("load resize", function(e) {
        var WindowWidth = $(window).outerWidth();
        var cellDiv1 = $(".col-3").find('.col');
        var cellDiv2 = $(".q_link").find('.col');
        if (WindowWidth >= 768) {
            $(".col-3 .container").each(function() {
                var highestBox = 0;
                $(cellDiv1, this).each(function() {
                    if ($(this).height() > highestBox) {
                        highestBox = $(this).height();
                    }
                });
                $(cellDiv1, this).height(highestBox);
            });
            $(".q_link .container").each(function() {
                var highestBox1 = 0;
                $(cellDiv2, this).each(function() {
                    if ($(this).height() > highestBox1) {
                        highestBox1 = $(this).height();
                    }
                });
                $(cellDiv2, this).height(highestBox1);
            });
        }
    });
    $('.category').children('ul').children('li').children('a').click(function(e) {
        $(this).parent('li').siblings('li').find('a').removeClass('active');
        $(this).addClass('active');
    });
    // // 無障礙快捷鍵盤組合
    // $(document).on('keydown', function(e) {
    //     if (e.altKey && e.keyCode == 83) {
    //         $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
    //         $('.search').find('input[type="text"]').focus();
    //     }
    //     if (e.altKey && e.keyCode == 85) {
    //         $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
    //         $('header').find('.accesskey').focus();
    //     }
    //     if (e.altKey && e.keyCode == 67) {
    //         $('html, body').stop(true, true).animate({ scrollTop: $('.main').find('.accesskey').offset().top }, 800, 'easeOutExpo');
    //         $('.main').find('.accesskey').focus();
    //     }
    //     if (e.altKey && e.keyCode == 70) {
    //         $('html, body').stop(true, true).animate({ scrollTop: $('footer').find('.accesskey').offset().top }, 800, 'easeOutExpo');
    //         $('footer').find('.accesskey').focus();
    //     }
    // });
    //不同語系
    var weblang = $('html').attr('lang');
    if (weblang.substring(0, 2) == 'zh') {
        // console.log("中文");
        $('.slick-prev').attr('title', '上一筆');
        $('.slick-next').attr('title', '下一筆');
    } else if (weblang.substring(0, 2) == 'en') {
        // console.log("英文");
        $('.slick-prev').attr('title', 'previous');
        $('.slick-next').attr('title', 'next');
    } else if (weblang.substring(0, 2) == 'vi') {
        // console.log("越南");
        $('.slick-prev').attr('title', 'Trước');
        $('.slick-next').attr('title', 'kế tiếp');
    } else if (weblang.substring(0, 2) == 'id') {
        // console.log("印尼");
        $('.slick-prev').attr('title', 'sebelumnya');
        $('.slick-next').attr('title', 'berikutnya');
    } else if (weblang.substring(0, 2) == 'km') {
        // console.log("柬埔寨");
        $('.slick-prev').attr('title', 'មុន');
        $('.slick-next').attr('title', 'បន្ទាប់');
    } else if (weblang.substring(0, 2) == 'th') {
        // console.log("泰文");
        $('.slick-prev').attr('title', 'ก่อน');
        $('.slick-next').attr('title', 'ต่อไป');
    } else {
        // console.log("沒有判斷");
        $('.slick-prev').attr('title', 'previous');
        $('.slick-next').attr('title', 'next');
    }
});