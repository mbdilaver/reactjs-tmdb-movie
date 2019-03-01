
// async getConfiguration() {
//     const config = await fetch("https://api.themoviedb.org/3/configuration?api_key=" + api_key);
//     return config;
// }

const api_key = process.env.REACT_APP_TMDB_API_KEY;

export const getMovieDetails = async (id) => {

    const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key + "&language=en-US";

    let json;
    try {
        const movie_details = await fetch(url);
        json = await movie_details.json();
    } catch(e) {
        console.error(e.toLocaleString());
    }

    return json;
};

export const searchMovies = async (query) => {

    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&language=en-US&query=" + query +"&page=1&include_adult=false";

    let json;
    try {
        const response = await fetch(url);
        json = await response.json();
    } catch(e) {
        console.error(e.toLocaleString());
    }

    return json;
};
