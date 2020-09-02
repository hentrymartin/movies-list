import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { MovieDetailsWrapper, MovieDetailsTitle, MovieDescription } from './MovieDetails.styles';
import { MovieDetailsProps } from './MovieDetails.types';
import Image from '../../components/MovieImage';
import FavouriteIcon from '../../components/FavouriteIcon';
import { View } from 'react-native';
import { getItem } from '../../utils/storage';
import { onAddToStorage } from '../../utils';

const MovieDetails = observer(({ route }: MovieDetailsProps) => {
  const { params:  { movie }} = route;
  const [isFavourite, setFavourite] = useState(false);

  useEffect(() => {
    (async () => {
      const favouriteIds = await getItem('@favouriteIds') as number[];
      setFavourite(favouriteIds && favouriteIds.includes(movie.id));
    })();
  }, [movie]);

  const onPressFavourite = () => {
    onAddToStorage(movie, setFavourite);
  };

  return (
    <MovieDetailsWrapper>
      <MovieDetailsTitle>{movie.title}</MovieDetailsTitle>

      <Image uri={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>

      <View>
        <FavouriteIcon favourite={isFavourite} onPress={onPressFavourite} /> 
      </View>
      <MovieDescription>
        {movie.overview}
      </MovieDescription>
    </MovieDetailsWrapper>
  )
});

export default MovieDetails;
