import React from 'react';
import { Text } from 'react-native';

import { CategoryItemProps } from './CategoryItem.props';
import { CategoryItemWrapper } from './CategoryItem.styles';

/**
 * Category item component
 * @param param0 
 */
const CategoryItem = ({ category, onPress }: CategoryItemProps) => {
  return (
    <CategoryItemWrapper onPress={onPress} testID="category-item">
      <Text testID="category-name">{category.name}</Text>
    </CategoryItemWrapper>
  );
};

export default CategoryItem;
