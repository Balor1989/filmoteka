import refs from '../../refs/variables';
import axios from "axios";
import rerenderMovieDetails from '../render/renderMovieModalValues';
import Loading from '../../plugins/loading'


export default async function fetchMoviesDetails(id) {
  Loading.pulse()
    try { const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${refs.API_KEY}`);
      rerenderMovieDetails(response.data)
      Loading.remove()
      console.log(response.data)
    } catch (error) {
      console.log(error);   
      Loading.remove()
    }
  }




    
