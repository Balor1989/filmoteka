import './sass/main.scss';
import './js/modal.js';
import renderPopularMovies from './js/apiService/apiService';
import backToTop from './js/plugins/backToTop';
import libraryClickBtn from './js/library';
import './js/themeBtn';

backToTop()

renderPopularMovies()

libraryClickBtn;
