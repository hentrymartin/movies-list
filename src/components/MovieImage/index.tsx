import React from 'react';

import { MovieImageProps } from './MovieImage.types';
import { MovieImage as Image } from './MovieImage.styles';

/**
 * Movie backdrop image
 * @param param0 
 */
const MovieImage = ({ uri }: MovieImageProps) => {
  return (
    <Image
      source={{
        uri,
      }}
      resizeMode="contain"
    />
  )
};

export default MovieImage;
