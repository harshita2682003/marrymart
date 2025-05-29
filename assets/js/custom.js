/*  jQuery Nice Select - v1.0
https://github.com/hernansartorio/jquery-nice-select
Made by Hernán Sartorio  */
!function (e) { e.fn.niceSelect = function (t) { function s(t) { t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><div class="list-wrp"><ul class="list"></ul></div>')); var s = t.next(), n = t.find("option"), i = t.find("option:selected"); s.find(".current").html(i.data("display") || i.text()), n.each(function (t) { var n = e(this), i = n.data("display"); s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text())) }) } if ("string" == typeof t) return "update" == t ? this.each(function () { var t = e(this), n = e(this).next(".nice-select"), i = n.hasClass("open"); n.length && (n.remove(), s(t), i && t.next().trigger("click")) }) : "destroy" == t ? (this.each(function () { var t = e(this), s = e(this).next(".nice-select"); s.length && (s.remove(), t.css("display", "")) }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this; this.hide(), this.each(function () { var t = e(this); t.next().hasClass("nice-select") || s(t) }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) { var s = e(this); e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus() }), e(document).on("click.nice_select", function (t) { 0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option") }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) { var s = e(this), n = s.closest(".nice-select"); n.find(".selected").removeClass("selected"), s.addClass("selected"); var i = s.data("display") || s.text(); n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change") }), e(document).on("keydown.nice_select", ".nice-select", function (t) { var s = e(this), n = e(s.find(".focus") || s.find(".list .option.selected")); if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1; if (40 == t.keyCode) { if (s.hasClass("open")) { var i = n.nextAll(".option:not(.disabled)").first(); i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus")) } else s.trigger("click"); return !1 } if (38 == t.keyCode) { if (s.hasClass("open")) { var l = n.prevAll(".option:not(.disabled)").first(); l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus")) } else s.trigger("click"); return !1 } if (27 == t.keyCode) s.hasClass("open") && s.trigger("click"); else if (9 == t.keyCode && s.hasClass("open")) return !1 }); var n = document.createElement("a").style; return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this } }(jQuery);
$(document).ready(function () {
  /******  Nice Select  ******/
  $('select').niceSelect();

//   // Browser vise class add to the body js start
//  /**
//  * Detect OS & browsers
//  */
//  /* Add class for mac */
//  if (navigator.appVersion.indexOf("Win") != -1) {
//   jQuery('body').addClass('window-os');
// }
// if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
//   jQuery('body').addClass('mac-os');
// }
// if (navigator.appVersion.indexOf("Linux") != -1) {
//   jQuery('body').addClass('linux-os');
// }
// /* Add class for all ie version */
// var trident = !!navigator.userAgent.match(/Trident\/7.0/);
// var net = !!navigator.userAgent.match(/.NET4.0E/);
// var IE11 = trident && net;
// var IEold = (navigator.userAgent.match(/MSIE/i) ? true : false);
// if (IE11 || IEold) {
//   jQuery('body').addClass('ie');
// }
// var ua = navigator.userAgent.toLowerCase();
// if (ua.indexOf('safari') != -1) {
//   if (ua.indexOf('chrome') > -1) {
//       jQuery('body').addClass('isChrome');
//   } else {
//       jQuery('body').addClass('isSafari');
//   }
// }
// var FF = !(window.mozInnerScreenX == null);
// if (FF) {
//   jQuery('body').addClass('fire-fox');
// } else {
//   //jQuery('body').addClass('not-fire-fox');
// }

  /********* On scroll heder Sticky *********/
  function initHeaderSticky() {
    if (jQuery(document).height() > jQuery(window).height()) {
      if (jQuery(this).scrollTop() > 250) {
        jQuery('.site-header').addClass("fixed");
      } else {
        jQuery('.site-header').removeClass("fixed");
      }
    }
  }
  $(document).ready(function () {
    initHeaderSticky()
  });
  $(window).on('resize scroll', function () {
    initHeaderSticky()
  });
  /********* On scroll heder back *********/
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header-sticky").style.transform = "translateY(0)";
    } else {
      if (jQuery(this).scrollTop() > 250) {
        document.getElementById("header-sticky").style.transform = "translateY(-100%)";
      }
    }
    prevScrollpos = currentScrollPos;
  }
  /******  menu hover  ******/
  $(".menu-lnk.has-item").hover(function () {
    $(this).toggleClass("menu_active");
    $(this).find(".menu-dropdown").toggleClass("open_menu");
    $("body").toggleClass("no_scroll");
  });
 /******* header responsive add language and currency js ********/
 function responsiveMenu() {
  if (jQuery(window).width() < 992) {
      if (!$('.mobile-lag').length > 0) {
          const newDiv = document.createElement('div');
          newDiv.className = 'mobile-lag flex align-center justify-between ';
          $(newDiv).insertAfter('.menu-close-icon');
          $('.country-name, .languages').prependTo('.mobile-lag');
      } else {
          return false;
      }
  }
  else {
      $('.header-style-one .country-name,.header-style-one .languages').prependTo('.header-select-wrp');
      $('.header-style-two .country-name,.header-style-two .languages').prependTo('.announcebar-right');
      $('.header-style-three .country-name,.header-style-three .languages').prependTo('.announcebar-right');
      $('.mobile-lag').remove();
  }
}
jQuery(document).ready(function () {
  responsiveMenu();
});
jQuery(window).resize(function () {
  responsiveMenu();
});
if ($('header').hasClass('header-style-one')) {
  $('body').addClass('header-style-one');
}
else if ($('header').hasClass('header-style-two')) {
  $('body').addClass('header-style-two');
}
else if ($('header').hasClass('header-style-three')) {
  $('body').addClass('header-style-three');
}
  /********* megamenu  popup  ********/
  $(".demo-btn").click(function () {
    $(".megamenu-popup").toggleClass("active");
    $("body").toggleClass("no_scroll");
  });
  $(".close-btn, .megamenu-popup").click(function () {
    $(".megamenu-popup").removeClass("active");
    $("body").removeClass("no_scroll");
  });
  $(".megamenu-popup-wrapper").click(function (event) {
    event.stopPropagation();
  });
     /********* Mobile Menu ********/
     $('.mobile-menu-button').on('click', function (e) {
      e.preventDefault();
      setTimeout(function () {
          $('body').addClass('no_scroll active_menu');
          $(".mobile-menu-wrapper").toggleClass("active_menu");
          $('.overlay').addClass('active');
      }, 50);
  });
  $('body').on('click', '.overlay, .menu-close-icon .close-menu', function (e) {
      e.preventDefault();
      $('body').removeClass('no_scroll active_menu');
      $(".mobile-menu-wrapper").removeClass("active_menu");
      $('.overlay').removeClass('active');
  });
  /*** megamenu  popup  ******/ 
  $(".demo-btn").click(function () {
    $(".megamenu-popup").addClass("active");
    $("body").addClass("no_scroll");
});
$(".close-btn, .megamenu-popup").click(function () {
    $(".megamenu-popup").removeClass("active");
    $("body").removeClass("no_scroll");
});
$(".megamenu-popup-wrapper").click(function (event) {
    event.stopPropagation();
});
   /*********  Multi-level accordion nav  ********/
   $('.acnav-label').click(function () {
    var label = $(this);
    var parent = label.parent('.has-children');
    var list = label.siblings('.acnav-list');
    if (parent.hasClass('is_open')) {
        list.slideUp('fast');
        parent.removeClass('is_open');
    }
    else {
        list.slideDown('fast');
        parent.addClass('is_open');
    }
});
/********* Cart Popup ********/
$('.main-cart').on('click', function (e) {
  e.preventDefault();
  setTimeout(function () {
      $('body').addClass('no_scroll cartopen');
      $('.overlay').addClass('active');
  }, 50);
});
$(document).on('click', '.overlay, .mini-cart-header .closecart', function (e) {
  e.preventDefault();
  $('.overlay').removeClass('active');
  $('body').removeClass('no_scroll cartopen');
  $('.coupon-popup').removeClass('active');
  $('.gift-popup').removeClass('active');
});
/*********coupon popup ********/
$(".coupon-icon").click(function () {
  $(".coupon-popup").addClass("active");
});
$(".coupon-icon").click(function () {
  $(".gift-popup").removeClass("active");
});
$(".close-coupon").click(function () {
  $(".coupon-popup").removeClass("active");
});
/*********gift popup ********/
$(".gift-icon").click(function () {
  $(".gift-popup").addClass("active");
});
$(".gift-icon").click(function () {
  $(".coupon-popup").removeClass("active");
});
$(".close-gift").click(function () {
  $(".gift-popup").removeClass("active");
});
/********* qty spinner ********/
var quantity = 0;
$('.quantity-increment').click(function () {
  ;
  var t = $(this).siblings('.quantity');
  var quantity = parseInt($(t).val());
  $(t).val(quantity + 1);
});
$('.quantity-decrement').click(function () {
  var t = $(this).siblings('.quantity');
  var quantity = parseInt($(t).val());
  if (quantity > 1) {
      $(t).val(quantity - 1);
  }
});
/** cart-slider **/
var swiper = new Swiper(".cart-slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 800,
  loop: true,
  autoplay: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
});
/*********  Header Search Popup  ********/
$(".search-header a").click(function () {
  $(".search-popup").addClass("active");
  $("body").addClass("no_scroll");
  $('.overlay').addClass('active');
  $('body').addClass('search-overlay');
});
$(".close-search, .overlay").click(function () {
  $(".search-popup").removeClass("active");
  $("body").removeClass("no_scroll"); +
      $('.overlay').removeClass('active');
  $('body').removeClass('search-overlay');
});
/** footer acnav **/
$(".footer-acnav").on("click", function () {
  if ($(window).width() < 768) {
      if ($(this).hasClass("is_open")) {
          $(this).removeClass("is_open");
          $(this).siblings(".footer-acnav-list").slideUp(200);
      } else {
          $(".footer-acnav").removeClass("is_open");
          $(this).addClass("is_open");
          $(".footer-acnav-list").slideUp(200);
          $(this).siblings(".footer-acnav-list").slideDown(200);
      }
  }
});
 /** counter js **/
 $('.counting').each(function () {
  var $this = $(this),
      countTo = $this.attr('data-count');
  $({ countNum: $this.text() }).animate({
      countNum: countTo
  },
      {
          duration: 3000,
          easing: 'linear',
          step: function () {
              $this.text(Math.floor(this.countNum));
          },
          complete: function () {
              $this.text(this.countNum);
          }
      });
});
/******** product notification js ********/
  if ($('.product-notification-popup').length > 0) {
    $('.product-notification-popup').addClass('active');
}
$(".notification-close-btn").on("click", function () {
    $('.product-notification-popup').removeClass('active');
});
/******* Cookie Js *******/
if ($('.cookie-popup').length > 0) {
  $('.cookie-popup').addClass('active');
}
$('.cookie-accept-btn').click(function () {
  $('.cookie-popup').slideUp();
});
/** pdp slider **/
  if(!$('.pdp-page-main-sec').hasClass('pdp-full-sec') ){
   const newDiv = document.createElement('div');
   newDiv.className = 'pdp-right-col';
   $(newDiv).insertAfter('.pdp-left-col');
   $('.pdp-left-content, .pdp-right-content').prependTo('.pdp-right-col');
 }else {
 $('.pdp-right-col').remove();
}
  /*** no thumbslider ***/  
  var swiper = new Swiper(".no-thumbslider", {
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 800,
    navigation: {
      nextEl: ".pdp-arrow.swiper-button-next",
      prevEl: ".pdp-arrow.swiper-button-prev",
    },
  });
/** product slider **/
  var swiper = new Swiper(".product-slider", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      speed: 800,
      navigation: {
          nextEl: '.product-arrow.swiper-button-next',
          prevEl: '.product-arrow.swiper-button-prev',
      },
      breakpoints: {
          1200: {
              slidesPerView: 4,
          },
          768: {
              slidesPerView: 3,
          },
          576: {
              slidesPerView: 2,
          },
          0: {
              slidesPerView: 1,
          },
      },
  });
  /** counter slider **/
  var swiper = new Swiper(".counter-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
});
/** testimonial slider **/
var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 2,
      loop: true,
      spaceBetween: 40,
      slideToClickedSlide: true,
      autoplay:true,
      speed: 800,
      navigation: {
        nextEl: '.testimonial-arrow.swiper-button-next',
        prevEl: '.testimonial-arrow.swiper-button-prev',
    },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 40,
          centeredSlides: true,
        },
        767: {
          centeredSlides: false,
          spaceBetween: 20,
        },
        576: {
          centeredSlides: false,
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          centeredSlides: false,
          slidesPerView: 1,
          spaceBetween: 20,
      },
      }
});
/** trending product slider **/
var swiper = new Swiper(".trending-product-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
      nextEl: '.trending-product-arrow.swiper-button-next',
      prevEl: '.trending-product-arrow.swiper-button-prev',
  },
  breakpoints: {
      1200: {
          slidesPerView: 4,
      },
      768: {
          slidesPerView: 3,
      },
      576: {
          slidesPerView: 2,
      },
      0: {
          slidesPerView: 1,
      },
  },
});
/** blog slider **/
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  slidesPerColumn: 3,
  speed: 800,
  navigation: {
    nextEl: '.blog-arrow.swiper-button-next',
    prevEl: '.blog-arrow.swiper-button-prev',
},
  grid: {
      rows: 3,  
  },
  breakpoints: {
    768: {
        slidesPerView: 1,
        grid: {
          rows: 3,  
      },
    },
    576: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        grid: {
          rows: 1,  
      },
    },
    0: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        grid: {
          rows: 1,  
      },
    },
},
});
  /********* mobile stickybar ********/
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $(".mobile-stickybar").addClass('show');
    } else {
        $(".mobile-stickybar").removeClass('show');
    }
  });
    /********* Subscribe popup Js ********/ 
    if ($('.subscribe-popup').length > 0) {
      $('.subscribe-popup').addClass('active');
      $('body').addClass('no_scroll');
      $(".overlay").addClass("active");
  };
  $('body').on('click', '.overlay , .close-sub-btn', function (e) {
      e.preventDefault();
      $("body").removeClass("no_scroll");
      $(".overlay").removeClass("active");
      $(".subscribe-popup").removeClass("active");
  });
/******* quick-view-popup Js *******/
$(".qv-btn").click(function () {
  $(".quick-view-popup").addClass("active");
  $("body").addClass("no_scroll");
  $('.overlay').addClass('active');
});
$(".quick-close-btn, .overlay").click(function () {
  $(".quick-view-popup").removeClass("active");
  $("body").removeClass("no_scroll");
  $('.overlay').removeClass('active');
});
    /**quickview-slider**/
    var swiper = new Swiper(".quickview-image-slider", {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      speed: 800,
      navigation: {
          nextEl: ".quickview-arrow.swiper-button-next",
          prevEl: ".quickview-arrow.swiper-button-prev",
      },
  });
  // TIMER COUNTER
function makeTimer() {
  var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
  var endTime = new Date("05 April 2025 9:56:00 GMT+01:00");
  endTime = (Date.parse(endTime) / 1000);
  var now = new Date();
  now = (Date.parse(now) / 1000);
  var timeLeft = endTime - now;
  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  if (hours < "10") { hours = "0" + hours; }
  if (minutes < "10") { minutes = "0" + minutes; }
  if (seconds < "10") { seconds = "0" + seconds; }
  $(".count-days").html(days);
  $(".count-hours").html(hours);
  $(".count-minites").html(minutes);
  $(".count-seconds").html(seconds);
}
setInterval(function () { makeTimer(); }, 1000);
  // ******** progress-wrap ************//
"use strict";
var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);
var offset = 50;
var duration = 550;
jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
    } else {
        jQuery('.progress-wrap').removeClass('active-progress');
    }
});
jQuery('.progress-wrap').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
});
 /****  TAB Js ****/
 $("ul.tabs li").click(function () {
  var $this = $(this);
  var $theTab = $(this).attr("data-tab");
  if ($this.hasClass("active")) {
  } else {
      $this
          .closest(".tabs-wrapper")
          .find("ul.tabs li, .tabs-container .tab-content")
          .removeClass("active");
      $(
          '.tabs-container .tab-content[id="' +
          $theTab +
          '"], ul.tabs li[data-tab="' +
          $theTab +
          "]"
      ).addClass("active");
  }
  $(this).addClass("active");
});
//** product review js **//
$('.product-review').click(function () {
  $('.product-review-form').toggleClass("showform");
});
/** recently product slider **/
var swiper = new Swiper(".recently-product-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
      nextEl: '.recently-product-arrow.swiper-button-next',
      prevEl: '.recently-product-arrow.swiper-button-prev',
  },
  breakpoints: {
      1200: {
          slidesPerView: 4,
      },
      768: {
          slidesPerView: 3,
      },
      576: {
          slidesPerView: 2,
      },
      0: {
          slidesPerView: 1,
      },
  },
});
  /*********  ask qustion Popup  ********/
  $(".pro-features li a.ask-qus").click(function () {
    $(".ask-qus-popup").addClass("active");
    $("body").addClass("no_scroll");
    $('.overlay').addClass('active');
});
$(".close-btn, .overlay").click(function () {
    $(".ask-qus-popup").removeClass("active");
    $("body").removeClass("no_scroll");
    $('.overlay').removeClass('active');
});
/*********  size Popup  ********/
$(".size-btn").click(function () {
  $(".size-popup").addClass("active");
  $("body").addClass("no_scroll");
  $('.overlay').addClass('active');
});
$(".close-btn, .overlay").click(function () {
  $(".size-popup").removeClass("active");
  $("body").removeClass("no_scroll");
  $('.overlay').removeClass('active');
});
/***** product-add-cart-stickey *****/
if ($('body').hasClass('product')) {
  $.fn.isInViewport = function () {
      var elementTop = this.offset().top;
      var elementBottom = elementTop + this.outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  $(window).scroll(function () {
      if ($('.cart-btn').isInViewport()) {
          $('.products-add-cart-sticky').removeClass('show_btn');
      } else {
          $('.products-add-cart-sticky').addClass('show_btn');
      }
  });
}
// left-thumb-slider
var leftsliderThumbnail = new Swiper(".left-thumbslider", {
  slidesPerView: 5,
  spaceBetween: 15,
  speed: 800,
  centeredSlides: false,
  centeredSlidesBounds: true,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
      992: {
          slidesPerView: 5,
          direction: "vertical",
      },
      768: {
          slidesPerView: 3,
          direction: 'horizontal',
      },
      576: {
          slidesPerView: 4,
          direction: 'horizontal',
      },
      0: {
          slidesPerView: 3,
          direction: 'horizontal',
      },
  },
});
var leftsliderMain = new Swiper(".left-mainslider", {
  spaceBetween: 15,
  watchOverflow: true,
  speed: 800,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  navigation: {
      nextEl: '.pdp-arrow.swiper-button-next',
      prevEl: '.pdp-arrow.swiper-button-prev',
  },
  thumbs: {
      swiper: leftsliderThumbnail
  }
});
leftsliderMain.on('slideChangeTransitionStart', function () {
  leftsliderThumbnail.slideTo(leftsliderMain.activeIndex);
});
leftsliderThumbnail.on('transitionStart', function () {
  leftsliderMain.slideTo(leftsliderThumbnail.activeIndex);
});
//  right-thumb-slider
var rightsliderThumbnail = new Swiper(".right-thumbslider", {
  slidesPerView: 5,
  spaceBetween: 15,
  speed: 800,
  centeredSlides: false,
  centeredSlidesBounds: true,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
      992: {
          slidesPerView: 5,
          direction: "vertical",
      },
      768: {
          slidesPerView: 3,
          direction: 'horizontal',
      },
      576: {
          slidesPerView: 4,
          direction: 'horizontal',
      },
      0: {
          slidesPerView: 3,
          direction: 'horizontal',
      },
  },
});
var rightsliderMain = new Swiper(".right-mainslider", {
  spaceBetween: 15,
  watchOverflow: true,
  speed: 800,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  navigation: {
      nextEl: '.pdp-arrow.swiper-button-next',
      prevEl: '.pdp-arrow.swiper-button-prev',
  },
  thumbs: {
      swiper: rightsliderThumbnail
  }
});
rightsliderMain.on('slideChangeTransitionStart', function () {
  rightsliderThumbnail.slideTo(rightsliderMain.activeIndex);
});
rightsliderThumbnail.on('transitionStart', function () {
  rightsliderMain.slideTo(rightsliderThumbnail.activeIndex);
});
// bottom-thumb-slider
var sliderThumbnail = new Swiper(".bottom-thumbslider", {
  slidesPerView: 4,
  spaceBetween: 15,
  speed: 800,
  centeredSlides: false,
  centeredSlidesBounds: true,
  watchOverflow: true,
  watchSlidesVisibility: false,
  watchSlidesProgress: false,
  breakpoints: {
      992: {
          slidesPerView: 4,
      },
      768: {
          slidesPerView: 3,
      },
      576: {
          slidesPerView: 4,
      },
      0: {
          slidesPerView: 3,
      },
  },
});
var sliderMain = new Swiper(".bottom-mainslider", {
  spaceBetween: 15,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  speed: 800,
  preventInteractionOnTransition: true,
  navigation: {
      nextEl: '.pdp-arrow.swiper-button-next',
      prevEl: '.pdp-arrow.swiper-button-prev',
  },
  thumbs: {
      swiper: sliderThumbnail
  }
});
sliderMain.on('slideChangeTransitionStart', function () {
  sliderThumbnail.slideTo(sliderMain.activeIndex);
});
sliderThumbnail.on('transitionStart', function () {
  sliderMain.slideTo(sliderThumbnail.activeIndex);
});
/*********  one & two grid slider *********/
var swiper = null;
var isSwiperInitialized = false;
function initSwiper() {
    //  one grid slider 
    swiper = new Swiper(".one-grid-main", {
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 800,
        freeMode: false,
        simulateTouch: false,
        navigation: {
            nextEl: '.pdp-arrow.swiper-button-next',
            prevEl: '.pdp-arrow.swiper-button-prev',
        },
        breakpoints: {
            420: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: "auto",
                spaceBetween: 0,
                freeMode: false,
                simulateTouch: false,
            },
        },
    });
    //  two grid slider 
    swiper = new Swiper(".two-grid-main", {
        slidesPerView: 1,
        spaceBetween: 15,
        freeMode: false,
        speed: 800,
        simulateTouch: false,
        navigation: {
            nextEl: '.pdp-arrow.swiper-button-next',
            prevEl: '.pdp-arrow.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: "auto",
                spaceBetween: 0,
                freeMode: false,
                simulateTouch: false,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            420: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
        },
    });
}
function destroySwiper() {
    if (swiper !== null) {
        swiper.destroy();
        swiper = null;
    }
}
function handleSwiper() {
    if (jQuery(window).width() < 768) {
        if (!isSwiperInitialized) {
            initSwiper();
            isSwiperInitialized = true;
        }
    } else {
        if (isSwiperInitialized) {
            destroySwiper();
            isSwiperInitialized = false;
        }
    }
}
// Function to handle resizing
function handleResize() {
    $(window).resize(function () {
        if ($('.swiper').hasClass('one-grid-main') || $('.swiper').hasClass('two-grid-main')) {
            handleSwiper();
        }
    }).trigger('resize'); // Trigger resize event on page load
}
// Call handleResize function on page load
$(document).ready(function () {
    handleResize();
});
 /******* Collection Filter *******/
    /*********************************/
    if ($('.product-listing-sec').hasClass('collection-leftbar') || $('.product-listing-sec').hasClass('collection-rightbar')) {
      $(window).on('resize load', function () {
          if ($(window).width() < 768) {
              $('.filter-title').on('click', function (e) {
                  e.preventDefault();
                  setTimeout(function () {
                      $('body').addClass('filter_no_scroll filter_open');
                      $('.overlay').addClass('filter_overlay');
                  }, 50);
              });
              $('body').on('click', '.overlay, .close-filter', function (e) {
                  e.preventDefault();
                  $('.overlay').removeClass('filter_overlay');
                  $('body').removeClass('filter_no_scroll filter_open');
              });
          } else {
              $('.filter-title').off('click');
              $('.overlay').removeClass('filter_overlay');
              $('body').removeClass('filter_no_scroll filter_open');
          }
      });
  }
  if ($('.product-listing-sec').hasClass('canvas-leftbar') || $('.product-listing-sec').hasClass('canvas-rightbar')) {
      $('.filter-title').on('click', function (e) {
          e.preventDefault();
          setTimeout(function () {
              $('body').addClass('no_scroll filter_open');
              $('.overlay').addClass('active');
          }, 50);
      });
      $('body').on('click', '.overlay, .close-filter', function (e) {
          e.preventDefault();
          $('.overlay').removeClass('active');
          $('body').removeClass('no_scroll filter_open');
      });
  }
  /** Team slider **/
  var swiper = new Swiper(".about-team-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    speed: 800,
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});
 /** contact-slider **/
 var swiper = new Swiper(".contact-slider", {
  slidesPerView: 3,
  spaceBetween: 0,
  speed: 800,
  navigation: {
      nextEl: ".contact-arrow.swiper-button-next",
      prevEl: ".contact-arrow.swiper-button-prev",
  },
  breakpoints: {
      768: {
          slidesPerView: 3,
      },
      576: {
          slidesPerView: 2,
      },
      0: {
          slidesPerView: 1,
      },
  },
});
});