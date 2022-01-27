import fetchGenresOfMovie from './fetch/fetchGenresOfMovie';
import fetchPopularMovies from './fetch/fetchPopularMovies';
import fetchMoviesByName from './fetch/fetchMoviesByName';
import debounce from "lodash.debounce";
import refs from '../refs/variables';
import pagination from '../plugins/tui-pagination';
import { fetchMoviesByGenres } from './fetch/fetchGenresMenu';

const { API_KEY, inputName } = refs;

export let page = JSON.parse(localStorage.getItem('page')) || 1; // Starting page value for movie search.


// Search movies by user request
// Runs with a handler by input value to the search 
const onFetchMovieByName = (e) => {
    if (!e.target.value) {
        fetchPopularMovies(API_KEY, page = 1);
        return;
    };

    fetchMoviesByName(API_KEY, page = 1, inputName.value);
};

// Handlers
inputName.addEventListener('input', debounce(onFetchMovieByName, 1000));



// Search for popular films. 
// Loads a list of movies on the main page and also adds genres to the "genres" variable
async function renderPopularMovies() {

    await fetchGenresOfMovie(API_KEY);

    await fetchPopularMovies(API_KEY, page);
};


// If the input value is 'false' - renders popular movies, otherwise - movies on demand
function usePagination(event) {
    // page = event.page;
    localStorage.setItem('page', JSON.stringify(event.page))
    if (inputName.value) {
        fetchMoviesByName(API_KEY, event.page, inputName.value);
        return;
    };

    if (!inputName.value) {
        fetchPopularMovies(API_KEY, event.page);
    };
};

// Tui-pagination options
// Adds a scroll effect after generating a new page
pagination.on('afterMove', (event) => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Render movies by condition
pagination.on('beforeMove', (event) => {
    usePagination(event);
});


export default renderPopularMovies;