import styled from 'styled-components/native';
import { RatingLevel } from '.';

export const MovieItemWrapper = styled.View`
  margin-top: 25;
  position: relative;
`;

export const MovieImage = styled.Image`
  height: 250px;
`;

export const ContentWrapper = styled.View`
  position: absolute;
  bottom: 0;
  background: rgba(265, 265, 265, 0.7);
  left: 0;
  right: 0;
  min-height: 100px;
  padding: 10px 20px;
`;

export const MovieTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

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
