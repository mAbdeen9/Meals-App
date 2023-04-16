import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsDetailsScreen from "./screens/mealsDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto } from "@expo/vector-icons";
import FavoriteContextProvider from "./store/context/favorites";
import FavoriteScreen from "./screens/FavoriteScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "#181818" }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#202125",
        },
        headerTintColor: "white",
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: "#202125",
          borderTopWidth: 0,
          padding: 5,
        },
        tabBarActiveTintColor: "#34B7F1",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        name="Categories"
        component={CategoriesScreen}
      />
      <Tab.Screen
        name="Favorite"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="favorite" size={size} color={color} />
          ),
        }}
        component={FavoriteScreen}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#202125", borderTopWidth: 0 },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#181818" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={MyTabs}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />

            <Stack.Screen
              name="MealsDetailsScreen"
              component={MealsDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
});
