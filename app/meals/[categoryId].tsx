import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../../components/MealItem';
import { MEALS, CATEGORIES } from '../../data/dummy-data';
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';

function MealsOverviewScreen() {
    const { categoryId } = useLocalSearchParams();
    const navigation = useNavigation();
  
    // Ensure categoryId is a string
    const categoryIdStr = Array.isArray(categoryId) ? categoryId[0] : categoryId;
  
    // Find the category title
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryIdStr
    )?.title;
  
    // Set the dynamic title when categoryTitle changes
    useEffect(() => {
      if (categoryTitle) {
        navigation.setOptions({ title: categoryTitle });
      }
    }, [categoryTitle, navigation]);
  
    // Filter meals by category ID
    const displayedMeals = MEALS.filter((mealItem) =>
      mealItem.categoryIds.includes(categoryIdStr)
    );
  
    // Render a meal item
    const renderMealItem = (itemData: { item: any }) => {
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
  }
  
  export default MealsOverviewScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });