import React, { SyntheticEvent, useEffect, useState } from 'react';
import { PopularSectionProps } from './PopularSection.types';
import {
  PopularitySection,
  PopularitySectionItem,
  PopularitySectionLabel,
  PopularitySectionValue
} from './PopularSection.styles';
import FavouriteIcon from '../FavouriteIcon';
import { onAddToStorage, getRatingLevel } from '../../utils';
import { getItem } from '../../utils/storage';
import { useNavigation } from '@react-navigation/native';

export enum RatingLevel {
  good = 'good',
  average = 'average',
  bad = 'bad',
};

/**
 * Popular section shows voting and favourites related information
 * @param param0 
 */
const PopularSection = ({ movie }: PopularSectionProps) => {
  const [isFavourite, setFavourite] = useState(false);
  const navigation = useNavigation();

  const onSetFavourites = async () => {
    const favouriteIds = await getItem('@favouriteIds') as number[];
    setFavourite(favouriteIds && favouriteIds.includes(movie.id));
  };

  useEffect(() => {
    // This is to set favourites when the navigation focus changes
    navigation.addListener('focus', onSetFavourites);
    onSetFavourites();
  }, [movie]);

  const onPressFavourite = (event: SyntheticEvent) => {
    if (event) event.stopPropagation();
    onAddToStorage(movie, setFavourite);
  };

  return (
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
      <PopularitySectionValue ratingLevel={getRatingLevel(movie)}>{movie.vote_average}</PopularitySectionValue>
      </PopularitySectionItem>
      <FavouriteIcon favourite={isFavourite} onPress={onPressFavourite} />
    </PopularitySection>
  );
};

export default PopularSection;
