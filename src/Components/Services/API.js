import axios from "axios";
const key = "cd745b1c38819d91d823e4d3c6c216e8";
const commonURL = "https://api.themoviedb.org/3/";

const API = {
  getTrending() {
    return axios
      .get(`${commonURL}trending/all/day?api_key=${key}`)
      .then((response) => response.data.results);
  },
  getSearch(query) {
    return axios
      .get(
        `${commonURL}search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => response.data.results);
  },
  getMovieById(id) {
    return axios
      .get(`${commonURL}movie/${id}?api_key=${key}&language=en-US`)
      .then((response) => response.data);
  },
  getCastById(id) {
    return axios
      .get(`${commonURL}movie/${id}/credits?api_key=${key}&language=en-US`)
      .then((response) => response.data.cast);
  },
  getReviewsById(id) {
    return axios
      .get(
        `${commonURL}movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
      )
      .then((response) => response.data.results);
  },
};
export default API;
