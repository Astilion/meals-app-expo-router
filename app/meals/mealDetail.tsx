import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { MEALS } from '../../data/dummy-data';
import MealDetails from '../../components/MealDetails';
import Subtitle from '../../components/MealDetail/Subtitle';
import List from '../../components/MealDetail/List';

export default function MealDetailScreen() {
  const params = useLocalSearchParams();

  useEffect(() => {
    console.log('MealDetailScreen mounted');
    console.log('Params:', params);
  }, []);

  const mealId = params.mealId as string;
  console.log('MealID:', mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log('Selected meal:', selectedMeal);

  if (!selectedMeal) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Meal not found! ID: {mealId}</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: selectedMeal.title,
        }}
      />
      <ScrollView style={styles.rootContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
