import styled from 'styled-components/native';
import { RatingLevel } from '.';

export const PopularitySection = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const PopularitySectionItem = styled.View`
  flex: 1;
`;

export const PopularitySectionLabel = styled.Text`
  font-size: 16px;
`;

export const PopularitySectionValue = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${({ratingLevel}: {ratingLevel?: string}) => {
    if (!ratingLevel) return 'black';
    switch(ratingLevel) {
      case RatingLevel.good:
        return 'green';
      case RatingLevel.average:
        return 'orange';
      default:
        return 'red';
    }
  }}
`;