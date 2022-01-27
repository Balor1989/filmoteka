// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import refs from '../../refs/variables';
// import renderMovies from '../render/renderMovies';
// import axios from "axios";
// import renderGenresMenu from '../render/renderGenresMenu';
// import { page } from '../apiService';
// import pagination from '../../plugins/tui-pagination';


// const { API_KEY} = refs;


// const dropdown = document.querySelector('.dropdown-content');

// dropdown.addEventListener('click', searchByGenre);

// export default async function fetchGenresMenu() {
//     try { fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
//         .then(response => {
//             return response.json();
//         })
//         .then( renderGenresMenu)
//     } catch (error) {
//         Notify.failure(`${error}`);
//         return Promise.reject(error);
//     };
// };


//    async function searchByGenre(e) {
//        e.preventDefault();

//        if (e.target.nodeName !== 'A') {
//            return;
//        }
//        localStorage.setItem('genre', e.target.dataset.sources)
//        await fetchMoviesByGenres(page)
//        pagination.reset(0)
       
// };
  
// export async function fetchMoviesByGenres(page) {
   
//     try {
//         const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${JSON.parse(localStorage.getItem('genre'))}&api_key=${API_KEY}&page=${page}`);
//         renderMovies(response);
//         console.log(response)
//     } catch (error) {
//         Notify.failure(`${error}`);
//         return Promise.reject(error);
//     };
// };


