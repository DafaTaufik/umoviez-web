import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSliderSettings } from "./sliderSettings";




const  UpComing= () => {
  const[upcomingMovies , setUpComingdMovies] = useState([])
  const [videoLinks, setVideoLinks] = useState([]);

  useEffect(() => {
    const fetchUpComing = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}`
        );
        setUpComingdMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUpComing();
  }, []);

  useEffect(() => {
    const fetchVideoLinks = async () => {
      const links = await Promise.all(
        upcomingMovies.map((movie) => {
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
  }, [upcomingMovies]);

  const [sliderRef, settings] = useSliderSettings();

  return (
    <div ref={sliderRef}>
      <Slider className="kotak mx-auto" {...settings}>
      {upcomingMovies.map((movie, i) => (
        <div key={i}>
          <Card movie={movie} videoLink={videoLinks[i]} />
        </div>
      ))}
      </Slider>
    </div>
  );
};

export default UpComing;
