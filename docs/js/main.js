//Sticky navbar
$(window).scroll(function() {
  if ($(window).scrollTop() >= 30 && $(window).width() < 768) {
    $(".navbar-wrapper").addClass("fixed");
  }
  if (
    $(window).scrollTop() >= 45 &&
    $(window).width() >= 768 &&
    $(window).width() < 1200
  ) {
    $(".navbar-wrapper").addClass("fixed");
  }
  if ($(window).scrollTop() >= 90 && $(window).width() >= 1200) {
    $(".navbar-wrapper").addClass("fixed");
  }

  //remove
  if ($(window).scrollTop() <= 30 && $(window).width() < 768) {
    $(".navbar-wrapper").removeClass("fixed");
  }
  if (
    $(window).scrollTop() <= 45 &&
    $(window).width() >= 768 &&
    $(window).width() < 1200
  ) {
    $(".navbar-wrapper").removeClass("fixed");
  }
  if ($(window).scrollTop() <= 90 && $(window).width() >= 1200) {
    $(".navbar-wrapper").removeClass("fixed");
  }
});

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

  $(".navbar__menu a").click(function() {
    $(".navbar__btn").removeClass("act");
    $(".navbar__menu").removeClass("act");
    $("body").css("overflow", "unset");
  });
});

// autoclose when resizing
$(window).resize(function() {
  $(".navbar__btn").removeClass("act");
  $(".navbar__menu").removeClass("act");
  $("body").css("overflow", "unset");
});


