import axios from "axios";

const key = "2299d955e8aa5354ded4cd342cb45a1b";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class MovieService {
    static getAllMovies = () => axios.get("/movie/popular", {
        params: {
            api_key: key,
            language: "en-US",
            page: 1,
        }
    });

     static getMovieById = (id) => axios.get(`/movie/${id}/videos`, {
        params: {
            api_key: key,
            language: "en-US"
        }
    });
}

export default MovieService;