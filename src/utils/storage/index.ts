import AsyncStorage from "@react-native-community/async-storage";


export const setItem = (name: string, value: any) => {
  AsyncStorage.setItem(name, JSON.stringify(value));
};

export const getItem = async (name: string) => {
  const value = await AsyncStorage.getItem(name);
  return value ? JSON.parse(value) : value;
};
