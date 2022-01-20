import fetchGenresOfMovie from './fetch/fetchGenresOfMovie';
import fetchPopularMovies from '../apiService/fetch/fetchPopularMovies';
import fetchMoviesByName from '../apiService/fetch/fetchMoviesByName';
import refs from '../../js/refs/variables';

const { API_KEY, btnSearch, inputName } = refs;
let page = 1

// Handlers
btnSearch.addEventListener('click', searchMovieByName)

// Search movies by user request
// Runs with a handler by clicking on the search button 
function searchMovieByName(e) {
    e.preventDefault();
    // const inputName = document.querySelector('.input').value;
    fetchMoviesByName(API_KEY, page, inputName.value);
}


// Search for popular films. 
// Loads a list of movies on the main page and also adds genres to the "genres" variable
function renderPopularMovies() {
    fetchGenresOfMovie(API_KEY)
    fetchPopularMovies(API_KEY, page)
}

export default renderPopularMovies