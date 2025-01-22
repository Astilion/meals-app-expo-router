import { useLocalSearchParams } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import MealsList from '../../components/MealsList/MealsList';
import { MEALS } from '../../data/dummy-data';

function MealsOverviewScreen() {
  const { categoryId } = useLocalSearchParams();
  const navigation = useNavigation();

  // Ensure categoryId is a string
  const categoryIdStr = Array.isArray(categoryId) ? categoryId[0] : categoryId;
  if (!categoryIdStr) {
    return (
      <View style={styles.container}>
        <Text>Invalid Category</Text>
      </View>
    );
  }
  // Filter meals by category ID
  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(categoryIdStr),
  );
  // Find the category title
  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryIdStr,
  )?.title;

  // Set the dynamic title when categoryTitle changes
  useEffect(() => {
    if (categoryTitle) {
      navigation.setOptions({ title: categoryTitle });
    }
  }, [categoryTitle]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
