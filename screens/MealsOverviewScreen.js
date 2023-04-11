import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen() {
  const id = useRoute();
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(id.params.catID)
  );

  const renderMeal = (itemData) => <MealItem data={itemData.item} />;

  return (
    <View style={style.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(i) => i.id}
        renderItem={renderMeal}
      />
      <Text>Meals Overview Screen {id.params.catID} </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
