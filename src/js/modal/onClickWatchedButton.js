import activeRenderWatchedMovies from "../library/activeRenderWatchedMovies";

// By clicking on the button, adds the current movie to the local-storage.
function onClickWatchedButton(e) {

    this.classList.toggle('btn__watched--active');

    const currentMovie = JSON.parse(localStorage.getItem('movie'));
    const watchedMovies = JSON.parse(localStorage.getItem('watched')) || [];

    // If movie is in storage - detect it, render new page and  use return.
    if (watchedMovies.find(watchedMovie => watchedMovie.id === currentMovie.id)) {
        
        localStorage.setItem('watched', JSON.stringify(watchedMovies.filter(watchedMovie => watchedMovie.id !== currentMovie.id)));

        activeRenderWatchedMovies();

        return;
    }
    
    // If the movie is not in storage, adds it to the end of the array and renders a new page.
    watchedMovies.push(currentMovie);

    localStorage.setItem('watched', JSON.stringify(watchedMovies));

    activeRenderWatchedMovies();
};

export default onClickWatchedButton;