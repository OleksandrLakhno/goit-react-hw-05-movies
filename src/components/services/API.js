import axios from 'axios';

const KEY = 'fea9bd6cc64d250f3b3bb2ecec82173d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMoviesInTrend = async () => {
  const responce = await axios.get(`trending/movie/day?api_key=${KEY}`);
  const moviesInTrendData = await responce.data.results;
  return moviesInTrendData;
};

export const fetchMovieByName = async (movieName, page) => {
  const responce = await axios.get(`search/movie?api_key=${KEY}&page=${page}&language=en&query=${movieName}`);
  const searchMoviesData = await responce.data.results;
  return searchMoviesData;
};

export const getMovieDetails = async movieId => {
  const responce = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  const MovieDetails = await responce.data;
  return MovieDetails;
};

export const getMovieCredits = async movieId => {
  const responce = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
  const movieCredits = await responce.data;
  return movieCredits;
};

export const getMovieReviews = async movieId => {
  const responce = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
  const movieReviews = await responce.data;
  return movieReviews;
};

// export async function fetchMoviesInTrend() {
//   const response = await axios.get(
//       `trending/movie/day?api_key=${KEY}`
//     );
//     return response.data.results;
//   };
  
//   export async function fetchMovieByName(searchQuery) {
//     const response = await axios.get(
//       `search/movie?api_key=${KEY}&query=${searchQuery}`
//     );
//     return response.data.results;  
//   };
  
  // export async function getMovieDetails(movieId) {
  //  const response = await axios.get(
  //     `movie/${movieId}?api_key=${KEY}`
  //   );
  //   return response.data;  
  // };
  
//   export async function getMovieCredits(movieId) {
//       const response = await axios.get(
//       `movie/${movieId}/credits?api_key=${KEY}`
//     );
//     return response.data;  
//   };
  
//   export async function getMovieReviews(movieId) {
//        const response = await axios.get(
//       `movie/${movieId}/reviews?api_key=${KEY}`
//     );
//     return response.data; 
//   };