import refs from '../../refs/variables';
import movieCard from '../../../templates/movieCard.hbs';
import { genres } from '../fetch/fetchGenresOfMovie';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import pagination from '../../plugins/tui-pagination';

const { rootEl } = refs;
let totalResults = 20000;  // Start value for pagination.

// Starts movies render
function renderMovies(response) {
    const data = response.data.results;
    
    if (!response.data.total_results) {
         Notify.failure('There are no movies for your request');
    };

    if (totalResults !== response.data.total_results) {
        totalResults = response.data.total_results;

        pagination.reset(totalResults);  // Assigns a new value to pagination.
    };

    // Iterates over an array of movies and makes changes according to the layout.
    const movies = data.map(
        (movie) => {
            const { release_date, poster_path, genre_ids } = movie;
            let genresID = genre_ids;
            let date = release_date;

            if (genresID && genresID.length > 2) {
                genresID.splice(2, 5, "other");
            };
            if (date) {
                date = release_date.slice(0, 4);
            };

            // Iterates over an array of genres and changes the numbers to the names of the genres from the variable "genres".
            // If there are more than two genres, it changes the rest to "Other".
            let genresOfMovie = genresID.map(id => id === "other" ? 'Other' : genres[id]).join(', ');
           
            // Returns the modified movie according to the layout.
            return {
                ...movie,
                release_date: date || 'unknown year',
                img: poster_path,
                genre_ids: genresOfMovie || 'other'
            };
        }
    );
   
    const markup = movies.map(movieCard).join('');

    rootEl.innerHTML = '';

    rootEl.insertAdjacentHTML('beforeend', markup);
}

export default renderMovies;
