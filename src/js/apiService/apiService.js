import fetchGenresOfMovie from './fetch/fetchGenresOfMovie';
import fetchPopularMovies from './fetch/fetchPopularMovies';
import fetchMoviesByName from './fetch/fetchMoviesByName';
import debounce from "lodash.debounce";
import refs from '../refs/variables';
import pagination from '../plugins/tui-pagination';

const { API_KEY, inputName } = refs;
 export let page = 1


// Search movies by user request
// Runs with a handler by input value to the search 
const onFetchMovieByName = (e) => {
    if (!e.target.value) {
        fetchPopularMovies(API_KEY, page=1);
        pagination.reset();
        return;
    }
    console.log(e.target.value)
    fetchMoviesByName(API_KEY, page=1, inputName.value)
    pagination.reset();
    
}

// Handlers
inputName.addEventListener('input', debounce( onFetchMovieByName, 300))

// Search for popular films. 
// Loads a list of movies on the main page and also adds genres to the "genres" variable
function renderPopularMovies() {
    fetchGenresOfMovie(API_KEY)
    fetchPopularMovies(API_KEY, page)
}

export default renderPopularMovies



function usePagination(event) {
    page = event.page;
    if (inputName.value) {
        fetchMoviesByName(API_KEY, page, inputName.value)
        return;
    }
    if (!inputName.value) {
        fetchPopularMovies(API_KEY, page)
    }
}


pagination.on('afterMove', (event) => {
    usePagination(event);
});

pagination.on('beforeMove', (event) => {
    usePagination(event);
});

