import { Contants } from "../constants";

export const getGenres = () => {
    return fetch(`${Contants.API_URL}genre/movie/list?api_key=${Contants.API_KEY}&language=en-US`)
    .then(response => response.json());
};
