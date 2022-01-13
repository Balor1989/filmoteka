import movieCard from '../../templates/movieCard.hbs'
import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from '../refs/variables';
import { genres } from './fetchGenresOfMovie';
const {rootEl} = refs

async function fetchMovies(api, page) {

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?page=${page}&api_key=${api}`);
        const data = response.data.results
        //  Notify.success('Succes');
        console.log(genres)
      
        const movies = data.map(
            (movie) => { 
                const { release_date, poster_path, genre_ids } = movie
                let genresID = genre_ids
                if (genresID.length > 2) {
                     genresID.splice(2, 5, "other")
                }
                let genresOfMovie = genresID.map(id => genres[id]?? 'Other').join(', ');
                return {
                    ...movie,
                    release_date:release_date.slice(0, 4),
                    img: poster_path,
                    genre_ids: genresOfMovie
                };
         }
        )
        console.log(movies)
        const markup = movies.map(movieCard).join('')
        rootEl.insertAdjacentHTML('beforeend', markup)
        
    }
        catch (error) {
        Notify.failure(`${error}`);
        return Promise.reject(error);
    };
};

export default fetchMovies