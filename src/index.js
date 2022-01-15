import './sass/main.scss';
import fetchPopularMovies from './js/apiService/apiService'
import backToTop from './js/plugins/backToTop'
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import libraryClickBtn from './js/library';


backToTop()
fetchPopularMovies()
libraryClickBtn;