import activeRenderQueueMovies from "../library/activeRenderQueueMovies";

// By clicking on the button, adds the current movie to the local-storage.
function onClickQueueButton(e) {

    this.classList.toggle('btn__queue--active');

    const currentMovie = JSON.parse(localStorage.getItem('movie'));
    const queueMovies = JSON.parse(localStorage.getItem('queue')) || [];
 
    // If movie is in storage - detect it, render new page and  use return.
    if (queueMovies.find(queueMovie => queueMovie.id === currentMovie.id)) {
        
        localStorage.setItem('queue', JSON.stringify(queueMovies.filter(queueMovie => queueMovie.id !== currentMovie.id)));

        activeRenderQueueMovies();

        return;
    };
    
    // If the movie is not in storage, adds it to the end of the array and renders a new page.
    queueMovies.push(currentMovie);

    localStorage.setItem('queue', JSON.stringify(queueMovies));

    activeRenderQueueMovies();
};

export default onClickQueueButton;