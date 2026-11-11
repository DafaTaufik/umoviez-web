import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { getTrendingMovieList } from "../api";

const BACKDROP_URL = (process.env.REACT_APP_BASEIMGURL || "").trim().replace(/\/w\d+$/, "/w1280");

const arrowClass =
  "absolute top-[38%] z-10 flex h-9 w-9 -translate-y-1/2 md:top-1/2 md:h-11 md:w-11 items-center justify-center rounded-full " +
  "bg-black/30 text-white opacity-0 ring-1 ring-white/20 backdrop-blur-md transition " +
  "duration-300 hover:scale-110 hover:bg-white/90 hover:text-gray-900 " +
  "group-hover:opacity-100 focus-visible:opacity-100 disabled:cursor-default disabled:opacity-0";

const Chevron = ({ direction }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

export default function Slides() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTrendingMovieList().then((result) => {
      setMovies(result.filter((movie) => movie.backdrop_path).slice(0, 8));
    });
  }, []);

  const openDetail = (movie) => {
    navigate(`/detail/${movie.id}`);
  };

  if (movies.length === 0) {
    return <div className="mx-auto mb-6 aspect-[16/10] md:aspect-[21/9] w-[92%] animate-pulse rounded-2xl bg-white/10" />;
  }

  return (
    <div className="mx-auto mb-6 w-[92%]">
      <div className="group relative">
        <button className={`hero-prev left-1.5 md:left-4 ${arrowClass}`} aria-label="Sebelumnya">
          <Chevron direction="left" />
        </button>
        <button className={`hero-next right-1.5 md:right-4 ${arrowClass}`} aria-label="Berikutnya">
          <Chevron direction="right" />
        </button>

        <Swiper
          loop={true}
          speed={800}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ el: ".hero-dots", clickable: true }}
          navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
          modules={[Autoplay, Pagination, Navigation]}
          className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="relative aspect-[16/10] md:aspect-[21/9] w-full cursor-pointer overflow-hidden text-left" onClick={() => openDetail(movie)}>
                <img className="hero-slide-img h-full w-full object-cover" src={`${BACKDROP_URL}${movie.backdrop_path}`} alt={movie.title} draggable={false} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="hero-slide-text absolute bottom-0 left-0 max-w-xl p-4 pb-6 text-white md:p-10 md:pb-12">
                  <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                    ★ {movie.vote_average.toFixed(1)}
                    {movie.release_date ? ` · ${movie.release_date.slice(0, 4)}` : ""}
                  </span>
                  <h2 className="mt-2 text-xl font-bold leading-tight md:text-4xl">{movie.title}</h2>
                  <p className="mt-2 hidden text-sm text-gray-200 md:line-clamp-3 md:block">{movie.overview}</p>
                  <button className="mt-3 rounded-lg bg-blue-500 px-4 py-1.5 text-xs md:mt-4 md:px-5 md:py-2 md:text-sm font-medium transition hover:bg-blue-600">Lihat Detail</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hero-dots" />
    </div>
  );
}
