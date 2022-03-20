export const settings: {} = {
  slidesToShow: 3,
  infinite: false,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2.125,
      },
    },
  ],
};
