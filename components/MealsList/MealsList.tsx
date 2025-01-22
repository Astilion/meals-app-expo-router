import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';
import { MealType } from '../../models/meal';

type MealListProps = {
  items: MealType[];
};
const MealsList = ({ items }: MealListProps) => {
  // Render a meal item
  const renderMealItem = (itemData: { item: MealType }) => {
    return <MealItem meal={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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
