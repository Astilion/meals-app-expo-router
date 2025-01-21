import { View, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { MEALS } from '../../data/dummy-data';
import MealItem from './MealItem';
import { MealType } from '../../models/meal';

const MealsList = () => {
  // Access categoryId from route parameters
  const { categoryId } = useLocalSearchParams();

  // Ensure categoryId is a string
  const categoryIdStr = categoryId?.toString();

  // Filter meals by category ID
  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(categoryIdStr),
  );

  // Render a meal item
  const renderMealItem = (itemData: { item: MealType }) => {
    return <MealItem meal={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
