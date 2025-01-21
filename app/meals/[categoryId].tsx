import { useLocalSearchParams} from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import MealsList from '../../components/MealsList/MealsList';

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
  // Find the category title
  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryIdStr,
  )?.title;

  // Set the dynamic title when categoryTitle changes
  useEffect(() => {
    if (categoryTitle) {
      navigation.setOptions({ title: categoryTitle });
    }
  }, [categoryTitle, navigation]);

  return <MealsList/>;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
