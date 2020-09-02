export interface CategoryItemType {
  name: string;
  id: number;
}

export interface CategoryItemProps {
  category: CategoryItemType;
  onPress: () => void;
}