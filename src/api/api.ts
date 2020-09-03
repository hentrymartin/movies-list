import { Contants } from "../constants";

/**
 * Get the list of genres
 */
export const getGenres = () => {
  return fetch(`${Contants.API_URL}genre/movie/list?api_key=${Contants.API_KEY}&language=en-US`)
  .then(response => response.json());
};

/**
 * Get the list of movies by genre id 
 * @param page 
 * @param genreId 
 */
export const getMoviesListByGenreId = (page: number, genreId?: number) => {
  return fetch(`${Contants.API_URL}discover/movie?api_key=${Contants.API_KEY}&language=en-US&with_genres=${genreId}&page=${page}`);
};
