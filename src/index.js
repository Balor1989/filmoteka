import './sass/main.scss';
import './js/modal/modal';
import './js/library/library';
import renderPopularMovies from './js/apiService/apiService';
import backToTop from './js/plugins/backToTop';
import './js/plugins/themeBtn';


backToTop();

renderPopularMovies();



// import fetchGenresMenu from "./js/apiService/fetch/fetchGenresMenu";
// fetchGenresMenu();