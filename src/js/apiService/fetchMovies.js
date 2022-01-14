import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import renderMovies from './renderMovies'


async function fetchMovies(api, page) {

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?page=${page}&api_key=${api}`);
        renderMovies(response)   
    }
        catch (error) {
        Notify.failure(`${error}`);
        return Promise.reject(error);
    };  
};

export default fetchMovies

