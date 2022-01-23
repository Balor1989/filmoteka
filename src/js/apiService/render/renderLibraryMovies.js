import pagination from "../../plugins/tui-pagination";

function renderLibraryMovies(array) {
    pagination.reset(0)
    const movies = array.map(
        (movie) => {
            const { release_date, genres } = movie;
            let date = release_date;
            let genresValue = genres;

            if (genresValue && genresValue.length > 2) {
                genresValue.splice(2, 6)
                genresValue.push({ id: 'other', name: 'Other' })
            };
            if (genres.length === 0) {
                genresValue.push({ id: 'other', name: 'Other' })
            };
            if (date) {
                date = release_date.slice(0, 4)
            };
            return {
                ...movie,
                release_date: date || 'unknown year',
                genres: genresValue
            };
        });
    console.log(movies)
    return movies;
}

export default renderLibraryMovies;