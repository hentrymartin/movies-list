import React, { useEffect } from 'react';
import { useMst } from '../../models/root';
import { observer } from "mobx-react-lite";
import { GenreDescription, ScrollViewWrapper } from './MoviesListView.styles';
import MoviesList from '../../components/MoviesList';

/**
 * This shows the list of movies based on the selected genre id
 */
const MoviesListView = observer(() => {
  const { 
    categories: { id, getGenreById },
    moviesList: { setGenreName, name }
  } = useMst();

  useEffect(() => {
    (async () => {
      if (id === 0) return;
      const { name } = getGenreById(id);
      setGenreName(name);
    })();

  }, [id]);

  return (
    <ScrollViewWrapper>
      <GenreDescription>{name}</GenreDescription>
      <MoviesList />
    </ScrollViewWrapper>
  );
});

export default MoviesListView;
