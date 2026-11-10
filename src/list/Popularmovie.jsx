import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSliderSettings } from "./sliderSettings";




const PopularMovie = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [videoLinks, setVideoLinks] = useState([]);
  
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularMovies();
  }, []);

  useEffect(() => {
    const fetchVideoLinks = async () => {
      const links = await Promise.all(
        popularMovies.map((movie) => {
          return axios
            .get(
              `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_APIKEY}`
            )
            .then((response) => response.data.results[0]?.key || null)
            .catch((error) => {
              console.log(error);
              return null;
            });
        })
      );
      setVideoLinks(links);
    };

    fetchVideoLinks();
  }, [popularMovies]);

  const [sliderRef, settings] = useSliderSettings();

  return (
    <div ref={sliderRef}>
      <Slider className="kotak mx-auto w-full" {...settings}>
      {popularMovies.map((movie, i) => (
        <div className="" key={i}>
          <Card movie={movie} videoLink={videoLinks[i]} />
        </div>
      ))}
      </Slider>
    </div>
  );
};

export default PopularMovie;
