//Sticky navbar
// $(window).scroll(function() {
//   if ($(window).scrollTop() >= 20 && $(window).width() < 768) {
//     $(".navbar").addClass("navbar--fixed");
//   }
//   if (
//     $(window).scrollTop() >= 30 &&
//     $(window).width() >= 768 &&
//     $(window).width() < 1200
//   ) {
//     $(".navbar").addClass("navbar--fixed");
//   }
//   if ($(window).scrollTop() >= 60 && $(window).width() >= 1200) {
//     $(".navbar").addClass("navbar--fixed");
//   }
//   //remove
//   if ($(window).scrollTop() <= 20 && $(window).width() < 768) {
//     $(".navbar").removeClass("navbar--fixed");
//   }
//   if (
//     $(window).scrollTop() <= 30 &&
//     $(window).width() >= 768 &&
//     $(window).width() < 1200
//   ) {
//     $(".navbar").removeClass("navbar--fixed");
//   }
//   if ($(window).scrollTop() <= 60 && $(window).width() >= 1200) {
//     $(".navbar").removeClass("navbar--fixed");
//   }
// });

$(function() {
  $(".navbar__btn").click(function() {
    $(this).toggleClass("act");
    if ($(this).hasClass("act")) {
      $(".navbar__menu").addClass("act");
      if ($(window).width() < 1200) {
        $("body").css("overflow", "hidden");
      }
    } else {
      $(".navbar__menu").removeClass("act");
      $("body").css("overflow", "unset");
    }
  });
});
// mobile-menu
// $(function() {
//   $(".navbar__btn").click(function() {
//     $(this).toggleClass("act");
//     if ($(this).hasClass("act")) {
//       $(".navbar__menu").addClass("act");
//       $(".navbar").css("height", "150vh");
//       $("body").css("overflow", "hidden");

//       if ($(window).width() >= 768) {
//         $(".navbar").css("width", "320px");
//       }
//     } else {
//       $(".navbar__menu").removeClass("act");
//       $(".navbar").css("height", "63px");
//       $("body").css("overflow", "unset");
//       if ($(window).width() >= 768) {
//         $(".navbar").css("width", "100%");
//       }
//     }
//   });
// });

// autoclose when resizing
// $(window).resize(function() {
//   $(".navbar__btn").removeClass("act");
//   $(".navbar__menu").removeClass("act");
//   $(".navbar").css("height", "63px");
//   $("body").css("overflow", "unset");
//   $(".navbar").css("width", "100%");
// });
