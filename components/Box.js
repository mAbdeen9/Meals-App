import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Box({ color, title, onPress }) {
  return (
    <View style={style.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [style.press, style.pressed] : style.press
        }
        onPress={onPress}
      >
        <View style={[style.btn, { backgroundColor: color }]}>
          <Text style={style.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 20,
    padding: 5,
    overflow: "hidden",
  },
  press: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
});
