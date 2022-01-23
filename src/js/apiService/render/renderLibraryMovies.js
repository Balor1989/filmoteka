

// Makes preparations for rendering movies on the page 'library'
function renderLibraryMovies(array) {
    
    // Iterates over an array of movies and makes changes according to the layout
    const movies = array.map(
        (movie) => {
            const { release_date, genres } = movie;
            let date = release_date;
            let genresValue = genres;

            if (genresValue && genresValue.length > 2) {

                genresValue.splice(2, 6);
                genresValue.push({ id: 'other', name: 'Other' });
            };

            if (genres.length === 0) {

                genresValue.push({ id: 'other', name: 'Other' });
            };

            if (date) {

                date = release_date.slice(0, 4);
            };
            // Returns the modified movie according to the layout.
            return {
                ...movie,
                release_date: date || 'unknown year',
                genres: genresValue
            };
        });
    
    return movies;
}

export default renderLibraryMovies;