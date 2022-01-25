import refs from '../../refs/variables';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loading from '../../plugins/loading';
import renderPosts from '../render/renderTrailer';
import axios from "axios";


const { API_KEY } = refs;

// Makes a request to get a movie with a list of trailers
async function onClickPlayButton() {
  const id = JSON.parse(localStorage.getItem('movieID'));
  Loading.pulse();
   
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`);   
   
    // If the trailer is not found - returns the default video.
    if (response.data.videos.results.length === 0) {
      renderPosts('FikZVa2wt2U');  // default trailer
      
      Loading.remove();
      return;
      };

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

export default onClickPlayButton;