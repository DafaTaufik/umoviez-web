import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




const NowMovie = () => {
  const[nowMovies , setNowMovies] = useState([])
  const [videoLinks, setVideoLinks] = useState([]);

  useEffect(() => {
    const fetchNowMovie = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=REDACTED"
        );
        setNowMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNowMovie();
  }, []);

  useEffect(() => {
    const fetchVideoLinks = async () => {
      const links = await Promise.all(
        nowMovies.map((movie) => {
          return axios
            .get(
              `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=REDACTED`
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
  }, [nowMovies]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed:5000,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    draggable:true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1930,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1445,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1205,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider className="kotak mx-auto" {...settings}>
      {nowMovies.map((movie, i) => (
        <div key={i}>
          <Card movie={movie} videoLink={videoLinks[i]} />
        </div>
      ))}
    </Slider>
  );
};

export default NowMovie;
