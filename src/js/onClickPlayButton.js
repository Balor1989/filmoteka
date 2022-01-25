import trailerTpl from '../templates/trailer.hbs';
import refs from '../js/refs/variables';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loading from '../js/plugins/loading';
import axios from "axios";


const { modalInfo, TRAILER__PATH, API_KEY } = refs;

// Makes a request to get a movie with a list of trailers
async function onClickPlayButton() {
  const id = JSON.parse(localStorage.getItem('movieID'));
  Loading.pulse();
   
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`);   
    console.log(response.data.videos.results.length)
    if (response.data.videos.results.length === 0) {
      
      renderPosts('FikZVa2wt2U');  // default trailer
      Loading.remove();
      return;
    }
    const trailerKey = response.data.videos.results[0].key;
    renderPosts(trailerKey);

    Loading.remove();
  }
   
    catch (error) {
    Notify.failure(`${error}`);
    
    Loading.remove();

    return Promise.reject(error);
  };
};


// Renders a window with a movie trailer on "YouTube"
function renderPosts(data) {

  const path = { path: TRAILER__PATH + data };

  const markup = trailerTpl(path);

  modalInfo.innerHTML = '';

  modalInfo.insertAdjacentHTML('afterbegin', markup);

};

export default onClickPlayButton;
