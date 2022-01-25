import trailerTpl from '../templates/trailer.hbs';
import refs from '../js/refs/variables';


const TRAILER_BASE_URL = 'https://www.youtube.com/embed/';


function onClickPlayButton() {
  console.log('fetch');
fetch("https://api.themoviedb.org/3/movie/tt9032400?api_key=7f7f3cc03c05575ccb98184b93174d1e&append_to_response=videos") .then(r => r.json()).then(data => console.log(data));

  
  // let path = TRAILER_BASE_URL;
  // // console.log(videos.results.length);
  // // if (this.videos.results.length !== 0)
  // //   path = TRAILER_BASE_URL + videos.results.key[0];
  // console.log('render');


}

function renderPosts(data) {
  console.log('RENDER')
  
//   const markup = TRAILER_BASE_URL + id.videos.results.key[0]

//   modalInfo.innerHTML = '';

//   modalInfo.insertAdjacentHTML('beforeend', markup);

//    modalInfo.insertAdjacentHTML('afterbegin', trailerTpl(id));
 
};

export default onClickPlayButton;
