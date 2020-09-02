import { MovieItem } from "../../screens/MoviesListView/MoviesListView.types";

export interface MovieItemProps {
  movie: MovieItem;
  detailsRouteName: string;
}