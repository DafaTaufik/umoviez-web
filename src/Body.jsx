import './App.css';
import Popularlist from './list/Popularmovie';
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";
import Sidebar from './components/Sidebar';
const Body = () => {
    const [popularMovies, setPopularMovies] = useState([]);
  
    useEffect(() => {
      getMovieList().then((result) => {
        setPopularMovies(result);
      });
    }, []);
  
    const search = (q) => {
      console.log({ q });
    };
  
    return (
      <div className="container-fluid">
        <Sidebar></Sidebar>
        <div className="bungkus">
          <header className="header">
            <h1>GEMOY 88</h1>     
            <input placeholder="CARI FILM.." className="Movie-search" onChange={({ target }) => search(target.value)} />
          </header>
          <div className="body">
            <div className="Popular">
              <div className="Card-container">
                <Popularlist popularMovies={popularMovies} />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Body;