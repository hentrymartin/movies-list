import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import FavouriteIcon from '.';

describe('<FavouriteIcon />', () => {
  const onPress = jest.fn();
  const props = {
    favourite: true,
    onPress,
  };

  it('check if onPress is triggered', () => {

    const { getByTestId } = render(<FavouriteIcon {...props} />);
    const favouriteIcon = getByTestId('favourite-icon');
    fireEvent(favouriteIcon, 'click');
    expect(onPress).toBeCalledTimes(1);
  });
});
