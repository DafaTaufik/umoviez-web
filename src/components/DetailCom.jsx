import React from "react";
import { useLocation } from "react-router-dom";
import Credit from "./Credit";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Detail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const posterPath = searchParams.get("poster");
  const title = searchParams.get("title");
  const videoLink = searchParams.get("video");
  const rating = searchParams.get("rating");
  const overview = searchParams.get("overview");
  const date = searchParams.get("date");
  const background = searchParams.get("background");
  const creditLink = searchParams.get("creditLink");

  const handleButtonClick = () => {
    // Logic for button click action
    // For example, you can open the trailer link in a new tab/window
    window.open(`https://www.youtube.com/watch?v=${videoLink}`, "_blank");
  };
  const [activeMenu, setActiveMenu] = useState("Dashboard"); // State untuk menu aktif
  const navigate = useNavigate();
  const scrollToDashboard = () => {
    setActiveMenu("Dashboard"); // Set menu aktif ke "Dashboard"
    navigate('/');
  };



  return (
    <div className="relative flex flex-row h-screen w-screen" style={{ textAlign: "center", color: "white" }}>
     <button
  className="font-bold inline-block mt-2 ml-2 px-4 py-2 bg-gray-500 text-white no-underline cursor-pointer border-none rounded-full text-xl relative z-10 h-12 transition-colors duration-300 hover:bg-blue-800"
  onClick={scrollToDashboard}
>
  Back
</button>

      <div className=" ml-20 flex flex-row mt-44">
        {posterPath && (
          <div className=" mr-10 top :0 inline-block" >
            <img 
              style={{ maxWidth: "400px", marginRight: "20px" }}
              src={`${process.env.REACT_APP_BASEIMGURL}/${posterPath}`}
              alt="Movie Poster"
              className="rounded-3xl"
            />
          </div>
        )}
        <div className="text-left w-2/3">
        
          
          {title && <h2 className="text-7xl font-bold" style={{ marginTop: 0, marginBottom: "5px" }}>{title}</h2>}
          {date && <p className="mt-4 text-3xl font-bold" style={{ marginTop: 0 }}>Release Date: {date}</p>}
          {rating && <p className="mt-2 text-3xl font-bold">Rating: {rating}</p>}
          {overview && <p  className=" mt-9 text-2xl mb-6" >{overview}</p>}
          {videoLink && (
            <button
            className="font-bold inline-block px-4 py-2  bg-gray-500 text-white no-underline cursor-pointer border-none rounded-full text-xl relative z-10 h-12 transition-colors duration-300 hover:bg-blue-800"
            onClick={handleButtonClick}
          >
            Watch Trailer
          </button>
            
          )}
        </div>
      </div>
      {background && (
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.09,
          }}
          src={`${process.env.REACT_APP_BASEIMGURL}${background}`}
          alt="Background Image"
        />
      )}
      
    </div>
  );
};

export default Detail;
