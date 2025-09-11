
import axios from "axios";
const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL


 export const getTopRatedMovieList = async () => {
const topRatedMovie = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`);

 console.log({topmovieList: topRatedMovie})
return topRatedMovie.data.results
}
export const getUpcomingMovieList = async () => {
    const UpcomingMovie = await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`);
    
     console.log({UpcomingmovieList: UpcomingMovie})
    return UpcomingMovie.data.results
    }

    export const getNowMovieList = async () => {
        const NowMovie = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`);
        
         console.log({NowmovieList: NowMovie})
        return NowMovie.data.results
        }

export const getMovieList = async () => {

    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    
     console.log({movieList: movie})
     
    return movie.data.results
    }
    export const getTvList = async () => {

        const movie = await axios.get(`${baseUrl}/tv/popular?api_key=${apiKey}`);
        
         console.log({TvList: movie})
         
        return movie.data.results
        }
    
export const getTime = async () => {
    const time = await axios.get ('https://timeapi.io/api/Time/current/zone?timeZone=ASIA/Jakarta');
    return time.data
}
export const getLink = async () => {
   

}
export const searchMovie =async (q) => {
const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`
    )
return search.data
  
}
export const searchTv =async (q) => {
    const search = await axios.get(
        `${baseUrl}/search/tv?query=${q}&api_key=${apiKey}`
        )
    return search.data
      
    }
