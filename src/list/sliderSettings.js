// breakpoint = max viewport width; jumlah slide disesuaikan supaya kartu terisi merata
const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 1,
  draggable: true,
  initialSlide: 0,
  responsive: [
    { breakpoint: 1800, settings: { slidesToShow: 7 } },
    { breakpoint: 1600, settings: { slidesToShow: 6 } },
    { breakpoint: 1400, settings: { slidesToShow: 5 } },
    { breakpoint: 1150, settings: { slidesToShow: 4 } },
    { breakpoint: 900, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
  ],
};

export default sliderSettings;
