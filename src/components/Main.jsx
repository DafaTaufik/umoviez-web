
import Popularlist from '../list/Popularmovie';
import TopRated from '../list/TopRatedMovies';
import UpComing from '../list/UpComing';
import NowMovie from '../list/NowMovie';
import Time from './Time';
import { getMovieList, searchMovie, getTopRatedMovieList, getUpcomingMovieList, getNowMovieList,} from "../api";
import { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import Slides from './Slides';
import logo from './assets/LGOI.png';


const Main = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topratedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies , setUpComingdMovies] = useState([])
  const[nowMovies , setNowMovies] = useState([])


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
    getUpcomingMovieList ().then((result) => {
      setUpComingdMovies(result);
    });
  }, []);

  useEffect(() => {
    getNowMovieList ().then((result) => {
      setNowMovies(result);
    });
  }, []);

  const search =async(q) => {
    if (q.length >=3){
     const query = await searchMovie(q)
     setUpComingdMovies(query.results)
   }
 }

  return (
<div className="h-screen w-full ">
  <div className="group h-screen flex mx-0 my-0 px-0 py-0 ">
    <Sidebar />
    <div className=" tengah mt-4 pt-2 pl-2 w-full overflow-x-hidden">
      <div id = "dashboard" className='  atas flex row justify-center mb-3 items-center gap-0.5 '>
        <div className=' ml-0 flex row'>
        <img className="w-8" src={logo} alt="logo"/>
        <h1 className="ml-2 font-sans text-3xl text-white text-center pb-2
        subpixel-antialiased ">Moviez
        </h1>
        </div>
        <div className=' ml-14  text-white'>
        <Time/>
        </div>
      </div>
      <Slides/>
      <div className="Card-container text-center font-poppins text-base">
        <h1 className='text-2xl text-left ml-16 mb-1 mt-0'>Popular</h1>
        <Popularlist popularMovies={popularMovies} />
        
        <h1 id = "upcoming" className='text-2xl text-left ml-16 mb-1 mt-0'>Up Coming</h1>
        <UpComing upcomingMovies={upcomingMovies} />
        
        <h1 id = "toprated" className='text-2xl text-left ml-16 mb-1 mt-0'>Top Rated</h1>
        <TopRated topratedMovies={topratedMovies} />
        <h1 id = "nowplaying"className='text-2xl text-left ml-16 mb-1 mt-0'>Now Playing</h1>
        <NowMovie nowMovies={nowMovies} />
      </div>
    </div>
  </div>
</div>

  );
};

export default Main;
