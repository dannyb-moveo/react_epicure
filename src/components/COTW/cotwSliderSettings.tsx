export const settings: {} = {
  slidesToShow: 3,
  infinite: false,
  dots: true,

  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
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
