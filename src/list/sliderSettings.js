import { useEffect, useRef, useState } from "react";

const CARD_SLOT = 230; // lebar (px) yang disediakan per kartu, termasuk jarak antar kartu

const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  draggable: true,
  initialSlide: 0,
};

// Jumlah kartu dihitung dari lebar wadah (bukan lebar layar), jadi tetap pas
// saat sidebar dibuka atau ditutup.
export const useSliderSettings = () => {
  const ref = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(sliderSettings.slidesToShow);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () =>
      setSlidesToShow(Math.max(2, Math.floor((el.clientWidth * 0.9) / CARD_SLOT)));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Satu klik arrow menggeser satu "halaman" penuh, sebanyak kartu yang terlihat
  return [ref, { ...sliderSettings, slidesToShow, slidesToScroll: slidesToShow }];
};

export default sliderSettings;
