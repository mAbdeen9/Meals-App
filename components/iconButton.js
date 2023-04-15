import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IconButton({ onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [style.container, style.pressed] : style.container
        }
      >
        <Ionicons name="star" size={33} color="white" />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressed: {
    opacity: 0.2,
  },
});
