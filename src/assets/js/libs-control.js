import $ from 'jquery/dist/jquery';

export const slickConfigure = () => {
  $( document ).ready( function () {
    $( '#movies-slide' ).slick( {
      // autoplay: true,
      // autoplaySpeed: 1000,
      className: 'movies-slick',
      dots: false,
      infinite: true,
      rows: 2,
      slidesToScroll: 1,
      slidesToShow: 4,
      speed: 1000,
      nextArrow: '<i class="material-icons right slick-arrow" style="display: flex;">keyboard_arrow_right</i>',
      prevArrow: '<i class="material-icons left slick-arrow" style="display: flex;">keyboard_arrow_left</i>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 3,
            dots: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            // vertical: true,
            // verticalSwiping: true,
          }// slickを削除
        }
      ]
    } );
  } );
};
