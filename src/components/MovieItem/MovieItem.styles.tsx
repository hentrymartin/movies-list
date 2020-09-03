import styled from 'styled-components/native';

export const MovieItemWrapper = styled.View`
  position: relative;
`;

export const ContentWrapper = styled.View`
  position: absolute;
  bottom: 0;
  background: rgba(265, 265, 265, 0.7);
  left: 0;
  right: 0;
  z-index: 10;
  min-height: 100px;
  padding: 10px 20px;
`;

export const MovieTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;
