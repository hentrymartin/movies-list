import { SyntheticEvent } from "react";

export interface FavouriteIconProps {
  favourite: boolean;
  onPress: (event: SyntheticEvent) => void;
}