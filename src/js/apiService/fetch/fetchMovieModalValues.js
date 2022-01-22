import refs from '../../refs/variables';
import axios from "axios";
import rerenderMovieDetails from '../render/renderMovieModalValues';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loading from '../../plugins/loading'


export default async function fetchMoviesDetails(id) {
  Loading.pulse()
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${refs.API_KEY}`);
      localStorage.setItem('movie', JSON.stringify(response.data))
    rerenderMovieDetails(response.data)
      Loading.remove()
      console.log(response.data)
    }
    catch (error) {
        Notify.failure(`${error}`);
        Loading.remove()
        return Promise.reject(error);
  };
};




    
