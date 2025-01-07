import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { MEALS } from '../../data/dummy-data';
import MealDetails from '../../components/MealDetails';
import Subtitle from '../../components/MealDetail/Subtitle';
import List from '../../components/MealDetail/List';
import IconButton from '../../components/IconButton';

const MealDetailsScreen = () => {
  // Log all params to debug
  const params = useLocalSearchParams();
  console.log('Received params:', params);
  
  // Get mealId from params
  const mealId = params.mealId as string;
  console.log('Looking for meal with ID:', mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log('Found meal:', selectedMeal);

  if (!selectedMeal) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.errorText}>
          Meal not found! ID: {mealId}
        </Text>
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
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
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
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
    flex: 1,
  },
  errorText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 32,
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