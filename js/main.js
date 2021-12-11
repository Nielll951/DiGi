$(function(){
   $('.top-slider').slick({
      dots: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            
          }
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false
          }
        }
      ]
    });
});