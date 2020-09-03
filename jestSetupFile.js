import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import fetchMock from 'jest-fetch-mock';
import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

fetchMock.enableMocks();

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');