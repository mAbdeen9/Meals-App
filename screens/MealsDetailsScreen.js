import { useContext, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import IconButton from "../components/IconButton";
// import { FavoriteContext } from "../store/context/favorites";
import { useDispatch, useSelector } from "react-redux";
import { favoritesActions } from "../store/Redux/favSlice";
export default function MealsDetailsScreen({ route, navigation }) {
  // const favoriteIDs = useContext(FavoriteContext);

  const favoriteIDs = useSelector((state) => state.favSlice);
  const dispatch = useDispatch();

  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
    id,
  } = route.params.data;

  const addToFavoriteHandler = () => {
    if (favoriteIDs.ids.includes(id)) {
      // favoriteIDs.removeFavorite(id);
      dispatch(favoritesActions.removeFromFav({ id: id }));
    } else {
      // favoriteIDs.addFavorite(id);
      dispatch(favoritesActions.addToFav({ id: id }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => {
        return (
          <IconButton
            name={favoriteIDs.ids.includes(id) ? "star" : "star-outline"}
            onPress={addToFavoriteHandler}
          />
        );
      },
    });
  }, [title, addToFavoriteHandler]);

  return (
    <ScrollView style={style.container}>
      <Image style={style.img} source={{ uri: imageUrl }} />
      <View style={style.detailsBox}>
        <Text style={style.detail}>{duration}m</Text>
        <Text style={style.detail}>{complexity}</Text>
        <Text style={style.detail}>{affordability}</Text>
      </View>

      <View style={style.scrollBox}>
        <Text style={style.title}>Ingredients</Text>
        <View style={style.line}></View>
        {ingredients.map((e) => (
          <Text style={style.details} key={e}>
            {e}
          </Text>
        ))}
        <Text style={style.title}>steps</Text>
        <View style={style.line}></View>
        {steps.map((e) => (
          <Text style={style.details} key={e}>
            {e}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    padding: 3,
    margin: 5,
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    margin: 10,
  },
  detailsBox: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
    justifyContent: "center",
  },
  details: {
    fontSize: 17,
    fontWeight: 400,
    borderRadius: 10,
    margin: 5,
    color: "white",
    backgroundColor: "#413650",
    padding: 14,
    overflow: "hidden",
    width: "100%",
  },
  detail: {
    fontSize: 15,
    fontWeight: 400,
    margin: 5,
    opacity: 0.7,
    color: "white",
  },
  scrollBox: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  line: {
    width: "100%",
    backgroundColor: "#7E7E7E",
    height: 1,
    alignSelf: "center",
    marginBottom: 17,
  },
});
