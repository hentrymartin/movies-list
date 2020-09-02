import React from 'react';

import { MovieImageProps } from './MovieImage.types';
import { MovieImage as Image } from './MovieImage.styles';

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
