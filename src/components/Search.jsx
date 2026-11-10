import { getMovieList, searchMovie } from "../api";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate();

  const handleSearchClick = (movie, videoLink) => {
    navigate(
      `/detail?poster=${encodeURIComponent(movie.poster_path)}&title=${encodeURIComponent(movie.title)}&video=${encodeURIComponent(videoLink)}&rating=${encodeURIComponent(movie.vote_average)}&overview=${encodeURIComponent(movie.overview)}&date=${encodeURIComponent(movie.release_date)}&background=${encodeURIComponent(movie.backdrop_path)}&id=${encodeURIComponent(movie.id)}`,
    );
  };

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovie = () => {
    const [videoLinks, setVideoLinks] = useState([]);

    useEffect(() => {
      const fetchVideoLinks = async () => {
        const links = await Promise.all(
          popularMovies.map((movie) => {
            return axios
              .get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_APIKEY}`)
              .then((response) => response.data.results[0]?.key || null)
              .catch((error) => {
                console.log(error);
                return null;
              });
          }),
        );
        setVideoLinks(links);
      };

      fetchVideoLinks();
    }, []);

    return popularMovies.map((movie, i) => {
      const link = videoLinks[i];

      return (
        <div className="Movie-card shadow-lg rounded-lg overflow-hidden" key={i} onClick={() => handleSearchClick(movie, link)}>
          <div className="Movie-image">
            <img className=" rounded-xl w-65 h-auto" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
            <p className="text-gray-300">Release date: {movie.release_date} </p>
            <p className="text-gray-300">Movie Rating: {movie.vote_average}</p>
            {link && (
              <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.open(`https://youtube.com/watch?v=${link}`, "_blank")}>
                  Go to Youtube
                </button>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length >= 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    } else if (q.length === 0) {
      // Reset popularMovies to the initially rendered movies
      setPopularMovies([]);
      getMovieList().then((result) => {
        setPopularMovies(result);
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6 md:px-12 pb-10">
      <header className="text-center w-full max-w-[1600px]">
        <h1 className="text-3xl text-white mb-6">SEARCH MOVIE</h1>
        <input placeholder="Search for movies..." className="border border-gray-300 rounded-md p-3 w-80 text-gray-800 focus:outline-none" onChange={({ target }) => search(target.value)} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto">
          <PopularMovie />
        </div>
      </header>
    </div>
  );
};

export default Search;
