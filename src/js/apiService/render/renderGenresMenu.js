import genresMenuTpl  from "../../../templates/genresMenu.hbs";
import refs from '../../refs/variables';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import pagination from '../../plugins/tui-pagination';
import movieCardTpl from "../../../templates/movieCardGenr.hbs";

let totalResults = 20000;  // Start value for pagination.

const { rootEl} = refs;
const dropdown = document.querySelector('.dropdown-content')

function renderGenresMenu(genre) { dropdown.innerHTML = genresMenuTpl(genre)}

async function renderElements(list, currentGenre) {
    try {
   
      rootEl.innerHTML = '';
      const itemList = list.filter(i => {
      const arrID = i.genre_ids;
      const chooseGenre = arrID.find(item => item == currentGenre);
      return chooseGenre;
  
      });
      renderMovies(itemList);
  } catch (error) {
      Notify.failure(`${error}`);
      return Promise.reject(error);
  };
  }
  
  function renderMovies(response) {     
      if (!response) {Notify.failure('There are no movies for your request');};
  
      if (totalResults !== response) {
         totalResults = response;
  
         pagination.reset(totalResults);  
     };
  
  
      const movies = response.filter(movie =>  {
              const { release_date, poster_path, genre_ids } = movie;
              let genresID = genre_ids;
              let date = release_date;
              
              if (genresID && genresID.length > 2) {
                  genresID.splice(2, 5, "other");
              };
              if (date) {
                  date = release_date.slice(0, 4);
              };

              let genresOfMovie = genresID.map(id => id === "other" ? 'Other' : movie[id]).join(', ');
             
              return {
                  ...movie,
                  release_date: date || 'unknown year',
                  img: poster_path,
                  genre_ids: genresOfMovie || 'other'
              };
          }
      );
      
         
      const markup = movies.map(movieCardTpl).join('');
  
      rootEl.innerHTML = '';
  
      rootEl.insertAdjacentHTML('beforeend', markup);
      }

      export default {
        renderGenresMenu,
        renderElements,
      }