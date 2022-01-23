import refs from '../../refs/variables';
import movieCard from '../../../templates/movieCard.hbs';
import { genres } from '../fetch/fetchGenresOfMovie';
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import pagination from '../../plugins/tui-pagination';

const { rootEl } = refs;
let totalResults = 20000;

function renderMovies(response) {
    const data = response.data.results;
        //  Notify.success('Succes');
    
    if (!response.data.total_results) {
         Notify.failure('No movies');
    }
    if (totalResults !== response.data.total_results) {
        totalResults = response.data.total_results;

        pagination.reset(totalResults);
    }
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

            let genresOfMovie = genresID.map(id => id === "other" ? 'Other' : genres[id]).join(', ');
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
