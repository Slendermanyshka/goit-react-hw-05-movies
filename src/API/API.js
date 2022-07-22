import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

const KEY = '96dea35b5a4d6ccb61b77721fd102ef9';

const GetFilms = async () => {
  const response = await axios.get(`3/trending/movie/day?api_key=${KEY}`);

  return response.data;
};

const getMovieById = async id => {
  const response = await axios.get(
    `3/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

const getMovieReviews = async id => {
  const response = await axios.get(
    `3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data;
};

const getMoviesByQuery = async query => {
  const response = await axios.get(
    `/3/search/movie?api_key=${KEY}&query=${query}`
  );
  return response.data;
};

const getMoviesCast = async id => {
  const response = await axios.get(`/3/movie/${id}/credits?api_key=${KEY}`);
  return response.data;
};

export {
  GetFilms,
  getMovieById,
  getMoviesByQuery,
  getMovieReviews,
  getMoviesCast,
};
