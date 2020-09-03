import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import CategoryItem from '.';

describe('<CategoryItem />', () => {
  const onPress = jest.fn();
  const props = {
    category: {
      id: 23,
      name: 'Action',
    },
    onPress,
  };

  it('check if onPress is triggered', () => {

    const { getByTestId } = render(<CategoryItem {...props} />);
    const categoryItem = getByTestId('category-item');
    fireEvent(categoryItem, 'click');
    expect(onPress).toBeCalledTimes(1);
  });

  it('check if category name is correct', () => {
    const { category } = props;
    const { getByText } = render(<CategoryItem {...props} />);
    const categoryItem = getByText(category.name);
    expect(categoryItem).toBeTruthy();
  });
});