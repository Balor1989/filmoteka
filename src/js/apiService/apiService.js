
import fetchGenresOfMovie from './fetchGenresOfMovie';
import fetchMovies from './fetchMovies';
import refs from '../refs/variables';

const { API_KEY } = refs;
let page = 1

function fetchPopularMovies() {
    fetchGenresOfMovie(API_KEY)
    fetchMovies(API_KEY, page)
}


export default fetchPopularMovies