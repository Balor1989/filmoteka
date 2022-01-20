import './sass/main.scss';
import renderPopularMovies from './js/apiService/apiService'
import backToTop from './js/plugins/backToTop'
import libraryClickBtn from './js/library'
// import './js/apiService/other/searchForm'; // форма поиска
// import './js/searchMovie';




backToTop()
renderPopularMovies()
libraryClickBtn;
// fetchMovieDetails()