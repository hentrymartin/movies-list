import React from 'react';
import { TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Image from '../MovieImage';
import { MovieItemProps } from './MovieItem.types';
import {
  MovieItemWrapper,
  ContentWrapper,
  MovieTitle,
} from './MovieItem.styles';
import PopularSection from '../PopularSection';

/**
 * Each movie item in flat list. Used to display title, image, voting etc.,
 * @param param0 
 */
const MovieItem = ({ movie, detailsRouteName }: MovieItemProps) => {
  const navigation = useNavigation();
  
  const onGoToDetailsView = () => {
    navigation.navigate(detailsRouteName, {
      movie,
    });
  };

  return (
    <TouchableHighlight onPress={onGoToDetailsView} testID="movie-item">
      <MovieItemWrapper>
          <Image uri={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
          <ContentWrapper>
            <MovieTitle numberOfLines={1}>{movie.title}</MovieTitle>
            <PopularSection movie={movie} />
          </ContentWrapper>
      </MovieItemWrapper>
    </TouchableHighlight>
  
  );
};

export default MovieItem;
