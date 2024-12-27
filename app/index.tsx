import { FlatList, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen() {
  const router = useRouter();

  const renderCategoryItem = (itemData: { item: Category }) => {
    const pressHandler = () => {
      router.push(`/meals/${itemData.item.id}`);
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#3f2f25',
  },
});

export default CategoriesScreen;
