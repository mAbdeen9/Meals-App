import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function MealItem({ data, navigation }) {
  const navigationHandler = () => {
    navigation.navigate("MealsDetailsScreen", { data });
  };

  return (
    <View style={style.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [style.btn, style.pressed] : style.btn
        }
        onPress={navigationHandler}
      >
        <View>
          <Image style={style.img} source={{ uri: data.imageUrl }} />
          <Text style={style.title}>{data.title}</Text>
        </View>
        <View style={style.detailsBox}>
          <Text style={style.details}>{data.duration}m</Text>
          <Text style={style.details}>{data.complexity}</Text>
          <Text style={style.details}>{data.affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  btn: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    padding: 3,
    margin: 5,
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: 200,
    alignSelf: "center",
  },
  detailsBox: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
    justifyContent: "center",
  },
  details: {
    fontSize: 15,
    fontWeight: 400,
    margin: 5,
    opacity: 0.7,
  },
});
