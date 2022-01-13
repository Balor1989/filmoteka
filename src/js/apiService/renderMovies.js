import refs from '../refs/variables';
import movieCard from '../../templates/movieCard.hbs'
import { genres } from './fetchGenresOfMovie';

const { rootEl } = refs

function renderMovies(response) {
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
                let genresOfMovie = genresID.map(id => id==="other" ? 'Other' : genres[id]).join(', ');
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


export default renderMovies