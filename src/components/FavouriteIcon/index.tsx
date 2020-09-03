import React, { useState, SyntheticEvent } from 'react';
import { TouchableOpacity } from 'react-native';

import StarFilled from '../../images/star-filled.png';
import Star from '../../images/star.png';

import { FavouriteIconProps } from './FavouriteIcon.types';
import { FavouriteImage } from './FavouriteIcon.styles';

/**
 * Component to show favourite status of the movie
 * @param param0 
 */
const FavouriteIcon = ({ favourite, onPress }: FavouriteIconProps) => {

  const getImage = () => {
    return favourite ? StarFilled : Star;
  };

  return (
    <TouchableOpacity onPress={onPress} testID="favourite-icon">
      <FavouriteImage
        source={getImage()}
        testID="star-icon"
      />
    </TouchableOpacity>
  );
};

export default FavouriteIcon;
