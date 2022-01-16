import './sass/main.scss';
import fetchPopularMovies from './js/apiService/apiService'
import backToTop from './js/plugins/backToTop'
import libraryClickBtn from './js/library'
import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import './js/searchForm'; // форма поиска
import './js/searchMovie';



backToTop()
fetchPopularMovies()
libraryClickBtn;

