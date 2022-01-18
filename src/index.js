import './sass/main.scss';
import fetchPopularMovies from './js/apiService/apiService'
import backToTop from './js/plugins/backToTop'
import libraryClickBtn from './js/library'
import fetchMovieDetails from './js/apiService/modal-fetchMovieDetails';
import './js/searchForm'; // форма поиска
import './js/searchMovie';




backToTop()
fetchPopularMovies()
libraryClickBtn;
// fetchMovieDetails()