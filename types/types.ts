import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Drawer: undefined;
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

export type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MealsCategories'
>;
