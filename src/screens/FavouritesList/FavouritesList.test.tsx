import React from 'react';
import { render } from '@testing-library/react-native';

import MockedNavigator from '../../utils/testing/mockedNavigator';
import FavouritesList from '.';

describe('<FavouritesList />', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
      addListener: jest.fn(),
    },
  };

  it('check if it is rendered properly', () => {
    const { toJSON } = render(
      <MockedNavigator component={() => <FavouritesList {...props} />} />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('check if addListener is called', () => {
    render(
      <MockedNavigator component={() => <FavouritesList {...props} />} />
    );

    expect(props.navigation.addListener).toBeCalled();
  });
});
