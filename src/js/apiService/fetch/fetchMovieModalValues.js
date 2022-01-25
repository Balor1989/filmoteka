import refs from '../../refs/variables';
import axios from "axios";
import rerenderMovieDetails from '../render/renderMovieModalValues';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loading from '../../plugins/loading'

const {API_KEY} = refs

// Runs a query to get information about a movie (for a modal window). 
 async function fetchMoviesDetails(id) {
   Loading.pulse();
   
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);

    localStorage.setItem('movie', JSON.stringify(response.data));
    localStorage.setItem('movieID', JSON.stringify(response.data.id))
    rerenderMovieDetails(response.data);

    Loading.remove();
  }
   
    catch (error) {
    Notify.failure(`${error}`);
    
    Loading.remove();

    return Promise.reject(error);
  };
};


export default fetchMoviesDetails;

    
