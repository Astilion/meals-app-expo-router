import { Drawer } from "expo-router/drawer";
import { Ionicons } from '@expo/vector-icons';
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        drawerStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="meals"
        options={{
          title: "Meals",
          drawerItemStyle: { height: 0 }, // Hide this from drawer
        }}
      />
    </Drawer>
  );
}