import { View, Text, StyleSheet } from "react-native";

export default function MealsDetailsScreen({ route }) {
  console.log("route.params");
  return (
    <View style={style.container}>
      <Text>Meals Details Screen 🍕 </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
