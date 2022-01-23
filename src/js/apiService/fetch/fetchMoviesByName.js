import axios from "axios";
import Loading from '../../plugins/loading'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import renderMovies from '../render/renderMovies'


// Runs a query to get a list of movies by query.
//Renders the result to the page
async function fetchMoviesByName(api, page,inputName) {

    try {
        Loading.pulse();

        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${inputName}&page=${page}`);

        renderMovies(response);

        Loading.remove();
    }
        catch (error) {
        Notify.failure(`${error}`);

        Loading.remove();

        return Promise.reject(error);
    };  

};

export default fetchMoviesByName;