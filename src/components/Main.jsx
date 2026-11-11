import Popularlist from "../list/Popularmovie";
import TopRated from "../list/TopRatedMovies";
import UpComing from "../list/UpComing";
import NowMovie from "../list/NowMovie";
import Time from "./Time";
import { getMovieList, getTopRatedMovieList, getUpcomingMovieList, getNowMovieList } from "../api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Slides from "./Slides";
import logo from "./assets/logo.png";

const Main = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topratedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpComingdMovies] = useState([]);
  const [nowMovies, setNowMovies] = useState([]);
  const { state } = useLocation();

  // Datang dari halaman lain lewat menu sidebar (mis. About Us -> Now Playing): langsung ke section-nya.
  // Tinggi halaman berubah saat list film selesai dimuat, jadi posisi diulang sampai layout stabil
  // atau pengguna mulai scroll sendiri.
  useEffect(() => {
    const target = state?.scrollTo;
    const section = target && document.getElementById(target);
    if (!section) return undefined;

    const scrollToSection = () => section.scrollIntoView();
    scrollToSection();

    const observer = new ResizeObserver(scrollToSection);
    observer.observe(section.parentElement);
    const stop = () => observer.disconnect();
    const timer = setTimeout(stop, 3000);
    const events = ["wheel", "touchstart", "keydown", "mousedown"];
    events.forEach((event) => window.addEventListener(event, stop, { once: true }));

    return () => {
      clearTimeout(timer);
      stop();
      events.forEach((event) => window.removeEventListener(event, stop));
    };
  }, [state]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  useEffect(() => {
    getTopRatedMovieList().then((result) => {
      setTopRatedMovies(result);
    });
  }, []);

  useEffect(() => {
    getUpcomingMovieList().then((result) => {
      setUpComingdMovies(result);
    });
  }, []);

  useEffect(() => {
    getNowMovieList().then((result) => {
      setNowMovies(result);
    });
  }, []);

  return (
    <div className="h-screen w-full ">
      <div className="group h-screen flex mx-0 my-0 px-0 py-0 ">
        <Sidebar />
        <div className=" tengah mt-4 pt-2 pl-2 w-full overflow-x-hidden">
          <div id="dashboard" className="  atas flex flex-col md:flex-row justify-center mb-3 items-center gap-2 md:gap-0.5 ">
            <div className=" ml-0 flex row">
              <img className="w-8" src={logo} alt="logo" />
              <h1
                className="ml-2 font-sans text-3xl text-white text-center pb-2
        subpixel-antialiased "
              >
                Moviez
              </h1>
            </div>
            <div className=" md:ml-14 text-center md:text-left text-white">
              <Time />
            </div>
          </div>
          <Slides />
          <div className="Card-container text-center font-poppins text-base">
            <h1 className="text-2xl text-left ml-4 md:ml-16 mb-1 mt-0">Popular</h1>
            <Popularlist popularMovies={popularMovies} />

            <h1 id="upcoming" className="text-2xl text-left ml-4 md:ml-16 mb-1 mt-0">
              Up Coming
            </h1>
            <UpComing upcomingMovies={upcomingMovies} />

            <h1 id="toprated" className="text-2xl text-left ml-4 md:ml-16 mb-1 mt-0">
              Top Rated
            </h1>
            <TopRated topratedMovies={topratedMovies} />
            <h1 id="nowplaying" className="text-2xl text-left ml-4 md:ml-16 mb-1 mt-0">
              Now Playing
            </h1>
            <NowMovie nowMovies={nowMovies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
