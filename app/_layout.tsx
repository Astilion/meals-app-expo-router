import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
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
  );
}
