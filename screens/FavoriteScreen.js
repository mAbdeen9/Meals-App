import { View, StyleSheet, FlatList } from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { FavoriteContext } from "../store/context/favorites";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

export default function FavoriteScreen({ navigation }) {
  // const favoriteIDs = useContext(FavoriteContext);
  const favoriteIDs = useSelector((state) => state.favSlice);

  let FavoriteMeals = MEALS.filter((meal) => {
    return favoriteIDs.ids.includes(meal.id);
  });

  const renderMeal = (itemData) => (
    <MealItem data={itemData.item} navigation={navigation} />
  );

  return (
    <View style={style.container}>
      <FlatList
        data={FavoriteMeals}
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
