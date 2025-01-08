import React from 'react';
import { Stack } from 'expo-router';

export default function MealsLayout() {
  console.log('MealsLayout loaded');

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Stack.Screen
        name='[categoryId]'
        options={{
          title: 'Meals Overview',
        }}
      />
      <Stack.Screen
        name='mealDetail'
        options={{
          title: 'Meal Details',
        }}
      />
    </Stack>
  );
}
