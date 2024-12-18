// import { StyleSheet, Text, Button } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';

// import CategoriesScreen from './screens/CategoriesScreen';
// import MealsOverviewScreen from './screens/MealsOverviewScreen';
// import MealDetailsScreen from './screens/MealDeatailsScreen';
// import { RootStackParamList } from './types/types';
// import FavouritesScreen from './screens/FavouritesScreen';

// const Stack = createNativeStackNavigator<RootStackParamList>();
// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#351401' },
//         headerTintColor: 'white',
//         sceneStyle: { backgroundColor: '#3f2f25' },
//         drawerStyle: { backgroundColor: '#351401' },
//         drawerInactiveTintColor: 'white',
//         drawerActiveTintColor: '351401',
//         drawerActiveBackgroundColor: '#e4baa1',
//       }}
//     >
//       <Drawer.Screen
//         name='Categories'
//         component={CategoriesScreen}
//         options={{
//           title: 'All Categories',
//           drawerIcon: ({ color, size }) => (
//             <Ionicons color={color} size={size} name='list' />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name='Favourites'
//         component={FavouritesScreen}
//         options={{
//           drawerIcon: ({ color, size }) => (
//             <Ionicons color={color} size={size} name='star' />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default function App() {
//   return (
//     <>
//       <StatusBar style='light' />
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerStyle: { backgroundColor: '#351401' },
//             headerTintColor: 'white',
//             contentStyle: { backgroundColor: '#3f2f25' },
//           }}
//         >
//           <Stack.Screen
//             name='Drawer'
//             component={DrawerNavigator}
//             options={{
//               headerShown: false,
//             }}
//           />
//           <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
//           <Stack.Screen
//             name='MealDetail'
//             component={MealDetailsScreen}
//             options={{ title: 'About the Meal' }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }
