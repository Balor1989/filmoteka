import modal from '/templates/modal.hbs'
import axios from "axios";
import refs from '../refs/variables';

const { API_KEY, modalInfo, onModalCloseBtn, onModalWatchedBtn, onModalQueueBtn } = refs;

export default async function fetchMovieDetails() {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
        const data = response.data
        console.log('fetchMoviesDetails', data);

        const movies = data.map(
            (movie) => { 
                const {release_date, poster_path, genre_ids } = movie
                const genresOfMovie = genre_ids.map(id => genres[id]).join(', ');
                return {
                    ...movie,
                    release_date:release_date.slice(0, 4),
                    img: poster_path,
                    genre_ids: genresOfMovie
                };
         }
        )

    
        
        const markup = movies.map(modal).join('')
        modalInfo.insertAdjacentHTML('beforeend', markup)
        console.log('fetchMoviesDetails', markup);
    }
        catch (error) {
        Notify.failure(`${error}`);
        return Promise.reject(error);
    };  
};