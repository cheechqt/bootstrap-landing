$(document).ready(() => {
  // hero slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  // project slider
  $("#project-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });
  // reviews slider
  $("#reviews-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    items: 1,
    smartSpeed: 800,
  });
});
