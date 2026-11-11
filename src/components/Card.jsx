import React from "react";
import { useNavigate } from 'react-router-dom';

const Card = ({ movie, videoLink }) => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate(`/detail/${movie.id}`);
  };
  
  

  const handleTrailerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="Card-movie cursor-pointer relative w-49 transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:scale-105 focus:shadow-lg focus:scale-105" onClick={handleSearchClick}>
      <div className="relative">
        <img
          className="Movie-image w-full h-auto opacity-100 transition-opacity hover:opacity-75"
          src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          alt={movie.title}
          onClick={handleTrailerClick}
        /> 
        
        <div className="pb-2 absolute inset-0 flex items-end justify-center">
          {videoLink && (
            <a href={`https://www.youtube.com/watch?v=${videoLink}`} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded opacity-0 transition-opacity duration-300 hover:opacity-100">
                Trailer 
              </button>
            </a>
          )}
        </div>
      </div>
      <p className="Movie-title">{movie.title}</p>
    </div>
  );
};

export default Card;
