
$(document).ready(function () {

    // for top button

    $(".top").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1);
    });

    $("header .navbar-nav .nav-link").click(function () {
      $("header .navbar .show").removeClass("show");
    });

});

// for top button 

$(window).scroll(function () {

    if ($(this).scrollTop() >= 30) {
        $(".top").addClass("effect");
    }

    else {
        $(".top").removeClass("effect");
    }

});

// testimonial js start  

$('.features-testimonial-box').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 671,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});

$('.popular-class-slider').slick({
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});

$('.client-review-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  arrows: true,
  dots: false,
  fade: true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right' aria-hidden='true'></i></button>",
  asNavFor: '.client-review-slider'
});

$('.client-review-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  asNavFor: '.client-review-img',
  dots: false,
  arrows: false,
});


// testimonial js end