import './sass/main.scss';
import './js/modal/modal';
import './js/library/library';
import renderPopularMovies from './js/apiService/apiService';
import backToTop from './js/plugins/backToTop';
import './js/themeBtn';
import fetchGenresMenu from "./js/apiService/fetch/fetchGenresMenu";


backToTop();

renderPopularMovies();

fetchGenresMenu();