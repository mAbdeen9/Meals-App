import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList } from "react-native";

export default function MealsOverviewScreen({ navigation }) {
  // useRoute hook give me access to the route parameter
  // route & navigation automatically passed to the component when the component configured as Stack.Screen
  const route = useRoute();
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.catID)
  );

  // useLayoutEffect is same as useEffect but the deference that react native will not render the screen
  // before finishing the running Task inside it so we get a better user experience
  useLayoutEffect(() => {
    const headerName = CATEGORIES.find((e) => e.id == route.params.catID).title;
    // SetOptions method to set dynamic title name for the screen component & more options . . .
    navigation.setOptions({
      title: headerName,
    });
  }, [route.params.catID]);

  const renderMeal = (itemData) => (
    <MealItem data={itemData.item} navigation={navigation} />
  );

  return (
    <View style={style.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(i) => i.id}
        renderItem={renderMeal}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
