import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export let genres = null

// Runs a query to get movies genres. 
// Writes the result to a variable "genres"
async function fetchGenresOfMovie(api) {
    try {

        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=en-US`);
        const data = response.data;

        return genres = data.genres.reduce((acc, { id, name }) => ({ ...acc, [id]: name }), {});
    }
    catch (error) {
        
        Notify.failure(`${error}`);

        return Promise.reject(error);
    };
};

export default fetchGenresOfMovie;
