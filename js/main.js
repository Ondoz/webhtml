$(document).ready(function () {
  // Navbar Scroll
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar")
        .css("background", "#323232")
        .css("box-shadow", "0px 0px 8px 0px rgba(51,51,51,1)")
        .css("transition", "all .3s ease-in-out");
    } else {
      $(".navbar").css("background", "transparent").css("box-shadow", "none");
    }
  });

  // Slick Carousel
  $(".beans__cards").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow: $(".beans__slider--right"),
    prevArrow: $(".beans__slider--left"),
  });
});
