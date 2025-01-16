import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import FavouritesContextProvider from '../store/context/favouritex-context';

export default function RootLayout() {
  return (
    <>
      <StatusBar style='light' />
      <FavouritesContextProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen name='(drawer)' />
          <Stack.Screen name='meals' options={{ headerShown: false }} />
        </Stack>
      </FavouritesContextProvider>
    </>
  );
}
