import React from 'react';
import { observer } from 'mobx-react-lite';

import {
  MovieDetailsWrapper,
  MovieDetailsTitle,
  MovieDescription,
  MenuWrapper,
} from './MovieDetails.styles';
import { MovieDetailsProps } from './MovieDetails.types';
import Image from '../../components/MovieImage';
import PopularSection from '../../components/PopularSection';

/**
 * This shows the movie details form route params
 */
const MovieDetails = observer(({ route }: MovieDetailsProps) => {
  const { params:  { movie }} = route;

  return (
    <MovieDetailsWrapper>
      <MovieDetailsTitle testID="movie-title">{movie.title}</MovieDetailsTitle>

      <Image uri={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>

      <MenuWrapper>
        <PopularSection movie={movie} />
      </MenuWrapper>
      
      <MovieDescription>
        {movie.overview}
      </MovieDescription>
    </MovieDetailsWrapper>
  )
});

export default MovieDetails;
