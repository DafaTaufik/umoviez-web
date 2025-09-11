import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import jImage from "./BacgroundMV/j.jpg";
import a from "./BacgroundMV/1.jpg";
import b from "./BacgroundMV/2.jpg";
import c from "./BacgroundMV/3.jpg";
import d from "./BacgroundMV/4.jpg";
import e from "./BacgroundMV/5.jpg";
import f from "./BacgroundMV/6.jpg";
import g from "./BacgroundMV/7.jpg";
export default function Slides() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
      >
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="w-3/4 mr-20 rounded-lg">
            <img className="kocak mx-auto w-5/6" src={jImage} alt="gambar" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="w-3/4 mr-20 rounded-lg">
            <img className="kocak mx-auto w-5/6" src={a} alt="gambar" />
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="w-3/4 mr-20">
            <img className="kocak mx-auto w-5/6" src={b} alt="gambar" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="w-3/4 mr-20">
            <img className="kocak mx-auto w-5/6" src={c} alt="gambar" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="w-3/4 mr-20">
            <img className="kocak mx-auto w-5/6" src={d} alt="gambar" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="w-3/4 mr-20">
            <img className="kocak mx-auto w-5/6" src={e} alt="gambar" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="w-3/4 mr-20">
            <img className="kocak mx-auto w-5/6" src={f} alt="gambar" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="w-3/4 mr-20">
            <img className="kocak mx-auto w-5/6" src={g} alt="gambar" />
          </div>
        </SwiperSlide>
        {/* Add more slides here */}

        {/* Navigation arrows */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-56 -translate-x-8 z-10">
          <div className="swiper-button-prev" />
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-80 translate-x-8 z-10">
          <div className="swiper-button-next" />
        </div>
      </Swiper>
    </div>
  );
}
