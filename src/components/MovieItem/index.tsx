import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { MovieItemProps } from './MovieItem.types';
import {
  MovieItemWrapper,
  MovieImage,
  ContentWrapper,
  MovieTitle,
  PopularitySection,
  PopularitySectionItem,
  PopularitySectionLabel,
  PopularitySectionValue,
} from './MovieItem.styles';

export enum RatingLevel {
  good = 'good',
  average = 'average',
  bad = 'bad',
};

const MovieItem = ({ movie }: MovieItemProps) => {

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

  return (
    <TouchableHighlight>
      <MovieItemWrapper
        style={{
          marginTop: 25,
        }}>
          <MovieImage
            source={{
              uri: `http://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
            }}
            resizeMode="contain"
          />
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
            </PopularitySection>
          </ContentWrapper>
      </MovieItemWrapper>
    </TouchableHighlight>
  
  );
};

export default MovieItem;
