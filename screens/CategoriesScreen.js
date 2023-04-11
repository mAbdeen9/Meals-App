import { View, StyleSheet, FlatList } from "react-native";
import Box from "../components/Box";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen({ navigation }) {
  const navHandler = (id) =>
    navigation.navigate("Meals Overview", { catID: id });

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(i) => i.id}
        numColumns={"2"}
        renderItem={(data) => (
          <Box
            onPress={navHandler.bind(this, data.item.id)}
            color={data.item.color}
            title={data.item.title}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
