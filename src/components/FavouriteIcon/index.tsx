import React, { useState, SyntheticEvent } from 'react';
import { TouchableOpacity } from 'react-native';

import StarFilled from '../../images/star-filled.png';
import Star from '../../images/star.png';

import { FavouriteIconProps } from './FavouriteIcon.types';
import { FavouriteImage } from './FavouriteIcon.styles';

const FavouriteIcon = ({ favourite, onPress }: FavouriteIconProps) => {

  const getImage = () => {
    return favourite ? StarFilled : Star;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <FavouriteImage
        source={getImage()}
      />
    </TouchableOpacity>
  );
};

export default FavouriteIcon;
