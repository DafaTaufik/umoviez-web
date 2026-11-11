import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getDetail, pickTrailerKey } from "../api";

const Detail = ({ type = "movie" }) => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  // Link lama masih memakai ?id=..., jadi tetap dibaca sebagai cadangan
  const id = params.id || searchParams.get("id");
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    getDetail(type, id)
      .then((result) => {
        if (cancelled) return;
        setData(result);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [type, id]);

  const title = data?.title || data?.name;
  const date = data?.release_date || data?.first_air_date;
  const rating = data?.vote_average;
  const overview = data?.overview;
  const posterPath = data?.poster_path;
  const background = data?.backdrop_path;
  const videoLink = data ? pickTrailerKey(data.videos?.results) : null;

  useEffect(() => {
    if (title) document.title = `${title} - Umoviez`;
    return () => {
      document.title = "Umoviez";
    };
  }, [title]);

  const handleButtonClick = () => {
    window.open(`https://www.youtube.com/watch?v=${videoLink}`, "_blank");
  };

  const scrollToDashboard = () => {
    navigate("/");
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-900" style={{ color: "white" }}>
      {/* Background Image */}
      {background && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}${background})`,
            opacity: 0.2,
          }}
        />
      )}

      {/* Overlay untuk membuat background lebih gelap */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent bg-opacity-80" />

      {/* Content */}
      <div className="relative z-10 h-full">
        {/* Back Button */}
        <div className="px-6 py-6">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-blue-800 text-white font-bold rounded-full transition-all duration-300 shadow-xl border-2 border-transparent"
            onClick={scrollToDashboard}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </button>
        </div>

        {status === "loading" && <p className="px-6 text-lg text-gray-300">Memuat detail...</p>}
        {status === "error" && <p className="px-6 text-lg text-gray-300">Detail tidak ditemukan.</p>}

        {/* Main Content */}
        {status === "ready" && (
          <div className="flex flex-col lg:flex-row h-full px-6 pb-6">
            {/* Poster Image */}
            {posterPath && (
              <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-12">
                <img src={`${process.env.REACT_APP_BASEIMGURL}/${posterPath}`} alt="Movie Poster" className="w-72 lg:w-80 h-auto rounded-xl shadow-2xl mx-auto lg:mx-0" />
              </div>
            )}

            {/* Movie Details */}
            <div className="flex-1 flex flex-col justify-center max-w-none">
              {title && <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>}

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {date && (
                  <div className="bg-gray-800 bg-opacity-80 px-6 py-3 rounded-lg backdrop-blur-sm">
                    <span className="text-gray-300 text-sm block">Release Date</span>
                    <p className="text-xl font-semibold">{date}</p>
                  </div>
                )}

                {typeof rating === "number" && (
                  <div className="bg-gray-800 bg-opacity-80 px-6 py-3 rounded-lg backdrop-blur-sm">
                    <span className="text-gray-300 text-sm block">Rating</span>
                    <p className="text-xl font-semibold text-yellow-400 flex items-center gap-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {rating.toFixed(1)}
                    </p>
                  </div>
                )}
              </div>

              {overview && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-200">Overview</h3>
                  <p className="text-lg leading-relaxed text-gray-100 max-w-4xl">{overview}</p>
                </div>
              )}

              {videoLink && (
                <div>
                  <button
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gray-600 hover:bg-blue-800 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-xl border-2 border-transparent transform hover:scale-105"
                    onClick={handleButtonClick}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Watch Trailer
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
