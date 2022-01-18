import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loading from '../plugins/loading'
import renderMovies from './renderMovies'


async function fetchMovies(api, page) {

    try {
        Loading.pulse()
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?page=${page}&api_key=${api}`);
        renderMovies(response)
        Loading.remove()
    }
        catch (error) {
        Notify.failure(`${error}`);
        Loading.remove()
        return Promise.reject(error);
    };  

};

export default fetchMovies

