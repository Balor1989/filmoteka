import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from '../../refs/variables';
import renderMovies from '../render/renderMovies';
import axios from "axios";
import renderGenresMenu from '../render/renderGenresMenu';
import pagination from '../../plugins/tui-pagination';


const { API_KEY} = refs;


const dropdown = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', searchByGenre);

export default async function fetchGenresMenu() {
    try { fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            return response.json();
        })
        .then( renderGenresMenu)
    } catch (error) {
        Notify.failure(`${error}`);
        return Promise.reject(error);
    };
};


   async function searchByGenre(e) {
       e.preventDefault();

       if (e.target.nodeName !== 'A') {
           return;
       }
       const genreID = e.target.dataset.sources;
       
       await fetchMoviesByGenres(genreID);
       await pagination.reset(0);
};
  
export async function fetchMoviesByGenres(genreID) {
   
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}&api_key=${API_KEY}&page=1`);
        renderMovies(response);
        console.log(response)
    } catch (error) {
        Notify.failure(`${error}`);
        return Promise.reject(error);
    };
};


