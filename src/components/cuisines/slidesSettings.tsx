export const settings: {} = {
  slidesToShow: 3,
  initialSlide: 0,
  infinite: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.5,
        initialSlide: 0,
        infinite: false,
        variableWidth: true,
      },
      //   settings: "unslick",
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1.5,
        initialSlide: 0,
        infinite: false,
        variableWidth: true,
      },
    },
  ],
};
