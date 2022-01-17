import refs from '../refs/variables';
import axios from "axios";
import rerenderMovieDetails from '../apiService/modal-renderMovieDetails';

export default async function fetchMoviesDetails(id) {
    try { const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${refs.API_KEY}`);
    rerenderMovieDetails(response)
    } catch (error) {
    console.log(error);   
    }
  }




    
