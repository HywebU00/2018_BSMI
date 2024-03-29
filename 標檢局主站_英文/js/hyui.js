$(function () {
  document.documentElement.addEventListener(
    'gesturestart',
    function (e) {
      e.preventDefault();
    },
    !1
  );
  var i = $(window),
    n = (i.outerWidth(), i.height(), $('body'));
  $('html').removeClass('no-js');
  var t = $('.navigation ul').length;
  $(window).bind('load', function (e) {
    1 < t && $('.navigation ul:nth-child(1)').addClass('left_nav');
  });
  var a = $('.menu');
  a.find('li').has('ul').addClass('hasChild');
  var l = a.find('li.hasChild'),
    s = $('.menu ul').children('li.hasChild');
  (liHasChild_level2 = $('.menu ul ul').children('li.hasChild')),
    (liHasChild_level3 = $('.menu ul ul ul').children('li.hasChild')),
    (subMenuWidth = l.first().children('ul').outerWidth()),
    $('body').prepend('<aside class="sidebar"><div class="m_area"><button type="button" class="sidebarClose">��𣈯��</button></div></aside><div class="menu_overlay"></div>'),
    $('header .container').prepend('<button type="button" class="sidebarCtrl">�湔��詨鱓</button><button type="button" class="searchCtrl">�䰻閰�</button>');
  var o = $('.sidebar'),
    c = $('.search'),
    r = $('.navigation'),
    e = $('.sidebarClose'),
    h = $('.sidebarCtrl'),
    d = $('.menu_overlay');
  (_mArea = $('.m_area')), h.append('<span></span><span></span><span></span>');
  var u,
    f = !1;
  function g() {
    _mArea.animate({ 'margin-left': -1 * _mArea.width() + 'px' }, 500, 'easeOutQuint', function () {
      o.fadeOut(200), _mArea.hide();
    }),
      $('body').removeClass('noscroll'),
      d.fadeOut(),
      l.children('ul').hide();
  }

  var body = document.querySelector('body');
  const observer = new ResizeObserver(function (entries) {
    if (entries[0].contentRect.width <= 992) {
      !1;
      o.hide();
      d.hide();
      r.prependTo(_mArea);
      a.prependTo(_mArea);
      c.prependTo(n);
      c.addClass('m_search');
      f = !1;
      _mArea.css({ 'margin-left': -1 * _mArea.width() + 'px' });
      s.on({
        mouseenter: function () {
          $(this).children('ul').stop(!0, !0).slideDown('600', 'easeOutQuint');
        },
        mouseleave: function () {
          $(this).parent().siblings('ul').hide(), $(this).children('ul').stop(!0, !0).slideUp('600', 'easeOutQuint');
        },
      });
      l.off().on('mouseenter,mouseleave');
      l.on('touchstart', function () {
        $(this).off('mouseenter,mouseleave');
      });
      s.off().on('click', function (e) {
        $(this).siblings('li').find('ul').stop(!0, !0).slideUp('600', 'easeOutQuint'), $(this).children('ul').stop(!0, !0).slideDown('600', 'easeOutQuint');
      });
      liHasChild_level2.off().on('click', function (e) {
        $(this).siblings('li').children('ul').stop(!0, !0).slideUp('600', 'easeOutQuint'), $(this).children('ul').stop(!0, !0).slideToggle('600', 'easeOutQuint');
      });
      liHasChild_level3.off().on('click', function (e) {
        e.preventDefault();
      });
      l.children('a')
        .off()
        .on('click', function (e) {
          e.preventDefault();
        });
      d.off('touchmove');
      var e = $('.searchCtrl');
      $('.m_search').hide();
      e.off().on('click', function (e) {
        f = f ? ($('.m_search').hide(), !1) : ($('.m_search').stop(!0, !1).slideDown('400', 'easeOutQuint'), !0);
        $('.m_search').find('#contentword2').focus();
      });
    } else {
      function t() {
        $('.search').hide();
      }
      g();
      $('.menu .hasChild>a').off('click');
      $('body').removeClass('noscroll');
      r.prependTo('.header .container');
      c.appendTo('.header .container');
      a.appendTo('.header .container');
      c.removeClass('m_search');
      c.hide();
      f = !1;
      $('.searchCtrl')
        .off()
        .click(function (e) {
          e.preventDefault();
          f = f ? ($('.search').hide(), !1) : ($('.search').stop(!0, !0).fadeIn(), !0);
        });
      $('.searchCtrl').keyup(function (e) {
        $('.search').stop(!0, !0).fadeIn();
        $('.search').find('input[type="text"]').focus(), (f = !0);
      });
      $('.search')
        .find('a:last')
        .focusout(function (e) {
          $('.search').hide();
          $('h1 a').focus();
          f = !1;
        });
      $('.main').click(t);
      $('.menu').click(t);
      l.on({
        mouseenter: function () {
          $(this).children('ul').stop(!0, !1).fadeIn();
        },
        mouseleave: function () {
          $(this).parent().siblings('ul').hide(), $(this).children('ul').stop(!0, !1).fadeOut();
        },
      });
      $(document).on('touchend click', function (e) {
        var t = e.target;
        $(t).is('.menu li a') || $('.menu').find('li ul').hide();
      });
    }
  });
  observer.observe(body);

  h.click(function (e) {
    o.show();
    _mArea.show();
    _mArea.animate({ 'margin-left': 0 }, 500, 'easeOutQuint');
    $('body').addClass('noscroll');
    d.fadeIn();
    // $('.m_search').hide();
    f = !1;
    d.off('touchmove');
    e.preventDefault();
    console.log('a');
  });
  d.add(e)
    .off()
    .click(function () {
      g();
    });
  d.off('mouseenter'),
    d.off().click(function () {
      g();
    });
  l.keyup(function () {
    $(this).children('ul').fadeIn(),
      $(this)
        .siblings()
        .focus(function () {
          $(this).hide();
        });
  });
  a.find('li').keyup(function () {
    $(this).siblings().children('ul').hide();
  });
  a.find('li:last>a').focusout(function () {
    a.find('li ul').hide();
  });

  var p,
    b = $('.header').outerHeight(!0),
    v = a.outerHeight();
  $('.navbar').height();
  $(window).bind('load scroll resize', function (e) {
    window.clearTimeout(p),
      (p = window.setTimeout(function () {
        768 <= i.outerWidth() && $(this).scrollTop() > b ? ($('.header').addClass('fixed'), $('.header').css('margin-top', v - b), $('.main').css('margin-top', b)) : ($('.header').removeClass('fixed'), $('.header').css('margin-top', 0), $('.main').css('margin-top', 0));
      }, 50));
  }),
    $('[class*="notice"] a.close').click(function (e) {
      $(this).parent('[class*="notice"]').hide();
    }),
    $('.accordion').each(function () {
      $(this).find('.accordion-content').hide(),
        $(this)
          .children('ul')
          .children('li')
          .children('a')
          .each(function () {
            $(this).click(function (e) {
              $(this).parent('li').siblings().children('.accordion-content').slideUp(), $(this).next('.accordion-content').slideToggle(), e.preventDefault();
            });
          });
    }),
    $('.btn-fatfooter').click(function (e) {
      $(this)
        .parent('.container')
        .find('nav>ul>li>ul')
        .stop(!0, !0)
        .slideToggle(function () {
          $(this).is(':visible') ? ($('.btn-fatfooter').html('�𤣰���'), $('.btn-fatfooter').attr('name', '�𤣰����詨鱓')) : ($('.btn-fatfooter').html('撅閖��'), $('.btn-fatfooter').attr('name', '撅閖�钅�詨鱓'));
        }),
        $(this).stop(!0, !0).toggleClass('close');
    }),
    $(window).bind('resize load', function (e) {
      $('.imgOuter').each(function (e, t) {
        var i,
          n = $(this),
          a = n.width(),
          l = n.height(),
          s = a / l,
          o = n.find('img'),
          c = $(this).find('img').width(),
          r = $(this).find('img').height();
        c / r < s
          ? ((i = a / c),
            o
              .width(a)
              .height(r * i)
              .css('top', -0.5 * (r * i - l)))
          : ((i = l / r),
            o
              .height(l)
              .width(c * i)
              .css('left', -0.5 * (c * i - a))),
          $(this).find('img').removeClass('img-responsive');
      });
    }),
    $(window).bind('resize load', function (e) {
      $('.imgOuter').each(function (e, t) {
        var i,
          n = $(this),
          a = n.width(),
          l = n.height(),
          s = a / l,
          o = n.find('img'),
          c = $(this).find('img').width(),
          r = $(this).find('img').height();
        c / r < s
          ? ((i = a / c),
            o
              .width(a)
              .height(r * i)
              .css('top', -0.5 * (r * i - l)))
          : ((i = l / r),
            o
              .height(l)
              .width(c * i)
              .css('left', -0.5 * (c * i - a))),
          $(this).find('img').removeClass('img-responsive');
      });
    });
  $('.gallery').append('<div class="lightbox"><a href="#" class="light_close">��𣈯��</a><a href="#" class="light_prev">銝𠹺�撘�</a><a href="#" class="light_next">銝衤�撘�</a><img src="" alt=""><div class="galler_overlay"></div></div>'),
    $('.gallery .lightbox').hide(),
    $('.light_close').click(function (e) {
      $('.gallery .lightbox').hide(), $('body').removeClass('noscroll'), $('.gallery .lightbox .caption').html(''), !1;
    }),
    $('.gallery .lightbox .galler_overlay').click(function (e) {
      $('.gallery .lightbox').hide(), $('body').removeClass('noscroll'), $('.gallery .lightbox .caption').html(''), !1;
    });
  $('.gallery .lightbox img').attr('src');
  var y = 0;
  $('.gallery a').click(function (e) {
    e.preventDefault(), !0;
  }),
    $('.gallery .thumbnail img').each(function (i) {
      $(this).click(function (e) {
        var t = $(this).attr('alt');
        $('body').addClass('noscroll'),
          $('.gallery .lightbox').append('<div class="caption">' + t + '<div>'),
          (THUMB_PIC = $(this).attr('src')),
          $('.gallery .lightbox img').attr('src', THUMB_PIC),
          $('.gallery .lightbox').fadeIn(),
          $('.gallery .lightbox .galler_overlay').fadeIn(),
          (y = i),
          e.preventDefault();
      });
    });
  var C = $('.gallery .thumbnail').length;
  function _() {
    y + 1 < C ? y++ : (y = 0),
      (THUMB_PIC = $('.gallery .thumbnail img').eq(y).attr('src')),
      (THUMB_H3 = $('.gallery .thumbnail img').eq(y).attr('alt')),
      $('.gallery .lightbox .caption').html(THUMB_H3),
      $('.gallery .lightbox img').hide(),
      $('.gallery .lightbox img').fadeIn(),
      $('.gallery .lightbox img').attr('src', THUMB_PIC);
  }
  function w() {
    1 < y + 1 ? y-- : (y = C - 1),
      (THUMB_PIC = $('.gallery .thumbnail img').eq(y).attr('src')),
      (THUMB_H3 = $('.gallery .thumbnail img').eq(y).attr('alt')),
      $('.gallery .lightbox .caption').html(THUMB_H3),
      $('.gallery .lightbox img').hide(),
      $('.gallery .lightbox img').fadeIn(),
      $('.gallery .lightbox img').attr('src', THUMB_PIC);
  }
  $('.gallery .light_next').click(function (e) {
    _(), e.preventDefault();
  }),
    $('.gallery .light_prev').click(function (e) {
      w(), e.preventDefault();
    }),
    0 ||
      $('body').keydown(function (e) {
        37 == e.keyCode ? w() : 39 == e.keyCode ? _() : 27 == e.keyCode && $('.gallery .lightbox').hide();
      }),
    $('.tabs').find('.active').next('.tabContent').show();
  var k,
    x = $('.tabSet').width(),
    T = $('.tabs>.tabItem').height();
  function I() {
    var a = $(window).width();
    $('.tabs').find('.active').next('.tabContent').show();
    var e = $('.tabs>.tabItem').height();
    return (
      $('.tabs').find('.tabContent').css('top', e),
      $('.tabSet').each(function () {
        x = $(this).width();
        var e = $(this).find('.tabs>.tabItem').height();
        $(this).children('.tabs').find('.tabContent').css('top', e);
        var t = $(this).find('.active').next('.tabContent').innerHeight(),
          i = $(this).find('.tabItem').length;
        $(this).height(t + e);
        var n = Math.ceil(x / i);
        $(this).find('.tabItem>a').width(n),
          768 <= a ? $(this).find('.tabItem:last').css({ position: 'absolute', right: '0' }) : $(this).find('.tabItem:last').css({ position: 'relative', right: '0' }),
          (t = $(this).parent('.tabItem').next('.tabContent').innerHeight()),
          $(this)
            .parents('.tabSet')
            .height(t + e);
      }),
      $(this).parent('.tabItem').siblings().removeClass('active'),
      $(this).parent('.tabItem').addClass('active'),
      !1
    );
  }
  $('.tabs').find('.tabContent').css('top', T),
    $('.tabs>.tabItem>a').focus(I),
    $('.tabs>.tabItem>a').click(I),
    $(window).bind('load resize', function (e) {
      I();
    }),
    $(window).bind('scroll', function () {
      200 < $(this).scrollTop() ? $('.scrollToTop').fadeIn() : $('.scrollToTop').fadeOut();
    }),
    $('.scrollToTop').click(function (e) {
      $('html, body').animate({ scrollTop: 0 }, 400, 'easeOutQuint'), e.preventDefault();
    }),
    (k = window.navigator.userAgent),
    /msie|Trident.*rv[ :]*11\./gi.test(k) &&
      $('.img-container').each(function () {
        var e = $(this).children('a').children('img').attr('src');
        $(this);
        $(this).has('.cover').find('a').addClass('ie-object-cover'),
          $(this)
            .has('.cover')
            .find('a')
            .css('backgroundImage', 'url(' + e + ')'),
          $(this).has('.fill').find('a').addClass('ie-object-fill'),
          $(this)
            .has('.fill')
            .find('a')
            .css('backgroundImage', 'url(' + e + ')'),
          $(this).has('.contain').find('a').addClass('ie-object-contain'),
          $(this)
            .has('.contain')
            .find('a')
            .css('backgroundImage', 'url(' + e + ')');
      }),
    $('input,textarea').focus(function () {
      $(this).removeAttr('placeholder');
    }),
    $(document).on('change', '.check_file', function () {
      for (var e = [], t = $(this).get(0).files.length, i = 0; i < $(this).get(0).files.length; ++i) e.push($(this).get(0).files[i].name);
      if (2 < t) {
        e.join(', ');
        $(this)
          .closest('.upload_grp')
          .find('.upload_file')
          .attr('value', t + ' files selected');
      } else $(this).closest('.upload_grp').find('.upload_file').attr('value', e);
    }),
    $(document).on('keydown', function (e) {
      e.altKey && 83 == e.keyCode && ($('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo'), $('.search').fadeIn(), $('.search').find('input[type="text"]').focus()),
        e.altKey && 85 == e.keyCode && ($('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo'), $('header').find('.accesskey').focus()),
        e.altKey &&
          67 == e.keyCode &&
          ($('html, body')
            .stop(!0, !0)
            .animate({ scrollTop: $('.main').find('.accesskey').offset().top }, 800, 'easeOutExpo'),
          $('.main').find('.accesskey').focus()),
        e.altKey &&
          90 == e.keyCode &&
          ($('html, body')
            .stop(!0, !0)
            .animate({ scrollTop: $('footer').find('.accesskey').offset().top }, 800, 'easeOutExpo'),
          $('footer').find('.accesskey').focus()),
        27 == e.keyCode && ($('.search').hide(), $('.search').find('input[type="text"]').focusout());
    }),
    $('.cp table').each(function (e, t) {
      0 == $(this).parents('.table_list').length && $(this).wrap('<div class="table_wrapper"></div>');
    });
});
