import {
  types,
  cast,
  flow,
  applySnapshot,
  } from "mobx-state-tree";
import { getMoviesListByGenreId } from "../api/api";


  export const Movie = types.model({
    poster_path: types.maybeNull(types.string),
    popularity: types.number,
    original_title: types.string,
    title: types.string,
    vote_average: types.number,
    overview: types.string,
    release_date: types.string,
    genre_ids: types.array(types.number),
    original_language: types.string,
    backdrop_path: types.maybeNull(types.string),
    adult: types.boolean,
    id: types.number,
    media_type: types.maybe(types.string),
    video: types.boolean,
    vote_count: types.number,
  });

  export const GenreMetadata = types.model({
    id: types.number,
    name: types.string,
  });

  export const MoviesList = types.model({
    list: types.optional(types.array(Movie), []),
    name: types.string,
    page: types.number,
    loading: types.boolean,
  })
  .actions(self => ({
    getMoviesById: flow(function* (page: number, id?: number) {
      self.loading = true;
      
      // for the 1st page we are just resetting the list to empty array
      if (page === 1) {
        applySnapshot(self.list, []);
      }

      try {
        const response = yield getMoviesListByGenreId(page, id);
        const { results } = yield response.json();
        applySnapshot(self.list, self.list.concat(results));
      } catch(e) {
        console.log(e);
      }
      self.loading = false;
      self.page = page;
    }),
    resetValues() {
      self.page = 1;
      applySnapshot(self.list, []);
    },
    setGenreName(name: string) {
      self.name = name;
    },
  }));