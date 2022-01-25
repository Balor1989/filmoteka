import trailerTpl from '../../../templates/trailer.hbs';
import refs from '../../refs/variables';

const { TRAILER__PATH, modalInfo } = refs;


// Renders a window with a movie trailer on "YouTube"
function renderPosts(data) {

  const path = { path: TRAILER__PATH + data };

  const markup = trailerTpl(path);

  modalInfo.innerHTML = '';

  modalInfo.insertAdjacentHTML('afterbegin', markup);

};


export default renderPosts;