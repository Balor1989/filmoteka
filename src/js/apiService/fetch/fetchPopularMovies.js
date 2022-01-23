import axios from "axios";
import Loading from '../../plugins/loading'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import renderMovies from '../render/renderMovies'


// Runs a query to get a list of popular movies.
//Renders the result to the page
async function fetchPopularMovies(api, page) {

    try {
        Loading.pulse();

        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?page=${page}&api_key=${api}`);

        renderMovies(response);

        Loading.remove();
    }
        catch (error) {
        Notify.failure(`${error}`);

        Loading.remove();

        return Promise.reject(error);
    };  

};

export default fetchPopularMovies;
