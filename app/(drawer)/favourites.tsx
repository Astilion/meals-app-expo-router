import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../../components/MealsList/MealsList';
import { FavouritesContext } from '../../store/context/favouritex-context';
import { MEALS } from '../../data/dummy-data';

export default function FavouritesScreen() {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id),
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favouriteMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f2f25',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
