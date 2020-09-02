import React, { useState, useEffect, SyntheticEvent } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Image from '../MovieImage';
import { MovieItemProps } from './MovieItem.types';
import {
  MovieItemWrapper,
  ContentWrapper,
  MovieTitle,
  PopularitySection,
  PopularitySectionItem,
  PopularitySectionLabel,
  PopularitySectionValue,
} from './MovieItem.styles';
import { getItem } from '../../utils/storage';
import FavouriteIcon from '../FavouriteIcon';
import { onAddToStorage } from '../../utils';

export enum RatingLevel {
  good = 'good',
  average = 'average',
  bad = 'bad',
};

const MovieItem = ({ movie, detailsRouteName }: MovieItemProps) => {

  const [isFavourite, setFavourite] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const favouriteIds = await getItem('@favouriteIds') as number[];
      setFavourite(favouriteIds && favouriteIds.includes(movie.id));
    })();
  }, [movie]);

  const getRatingLevel = () => {
    const { vote_average } = movie;
    if (vote_average > 8.5) {
      return RatingLevel.good;
    } else if (vote_average > 6.5 && vote_average <= 8.5 ) {
      return RatingLevel.average;
    } else {
      return RatingLevel.bad;
    }
  };
  
  const onGoToDetailsView = () => {
    navigation.navigate(detailsRouteName, {
      movie,
    });
  };

  const onPressFavourite = (event: SyntheticEvent) => {
    if (event) event.stopPropagation();
    onAddToStorage(movie, setFavourite);
  };

  return (
    <TouchableHighlight onPress={onGoToDetailsView}>
      <MovieItemWrapper>
          <Image uri={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
          <ContentWrapper>
            <MovieTitle numberOfLines={1}>{movie.title}</MovieTitle>
            <PopularitySection>
              <PopularitySectionItem>
                <PopularitySectionLabel>
                  Popolarity
                </PopularitySectionLabel>
                
                <PopularitySectionValue>{movie.popularity}</PopularitySectionValue>
              </PopularitySectionItem>

              <PopularitySectionItem>
                <PopularitySectionLabel>
                  Vote
                </PopularitySectionLabel>
              <PopularitySectionValue ratingLevel={getRatingLevel()}>{movie.vote_average}</PopularitySectionValue>
              </PopularitySectionItem>
              <FavouriteIcon favourite={isFavourite} onPress={onPressFavourite} />
            </PopularitySection>
          </ContentWrapper>
      </MovieItemWrapper>
    </TouchableHighlight>
  
  );
};

export default MovieItem;
