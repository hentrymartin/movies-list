import React from 'react';
import { Text } from 'react-native';
import { CategoryItemProps } from './CategoryItem.props';
import { CategoryItemWrapper } from './CategoryItem.styles';

const CategoryItem = ({ category, onPress }: CategoryItemProps) => {
  return (
    <CategoryItemWrapper onPress={onPress}>
      <Text>{category.name}</Text>
    </CategoryItemWrapper>
  );
};

export default CategoryItem;
