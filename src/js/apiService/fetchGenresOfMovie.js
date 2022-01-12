import axios from "axios";
 
export let genres = null

async function fetchGenresOfMovie(api) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=en-US`);
        const data = response.data
        console.log(data)
        return genres = data.genres.reduce((acc, { id, name }) => ({ ...acc, [id]: name }), {})
    }
        catch (error) {
        Notify.failure(`${error}`);
        return Promise.reject(error);
    };


};

export default fetchGenresOfMovie
