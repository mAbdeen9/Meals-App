import React, { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList } from "react-native";

export default function MealsOverviewScreen({ navigation }) {
  const route = useRoute();
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.catID)
  );

  useLayoutEffect(() => {
    const headerName = CATEGORIES.find((e) => e.id == route.params.catID).title;
    navigation.setOptions({
      title: headerName,
    });
  }, [route.params.catID]);

  const renderMeal = (itemData) => <MealItem data={itemData.item} />;

  return (
    <View style={style.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(i) => i.id}
        renderItem={renderMeal}
      />
      <Text>Meals Overview Screen {route.params.catID} </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
