import './sass/main.scss';
import fetchPopularMovies from './js/apiService/apiService'
import backToTop from './js/plugins/backToTop'
import libraryClickBtn from './js/library'



backToTop()
fetchPopularMovies()
libraryClickBtn;