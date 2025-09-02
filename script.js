
$(document).ready(function () {
  $(document).on("click", ".toggle", function () {
    $(".r-side").toggleClass("back");
  });

  // Scroll To Top Button
  var btn = $(".scr-top");
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    if (scroll >= 500) {
      btn.fadeIn(800);
    } else {
      btn.fadeOut(800);
    }
  });


  // click Button to scroll top
  $(".scr-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 200);
  });

  //nav bar links
  $(".links li a").on("click", function () {
    $(this)
      .addClass("active")
      .parent("li")
      .siblings()
      .find("a")
      .removeClass("active");

    $(".r-side").removeClass("back");
  });

  // Owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
