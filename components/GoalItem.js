import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalitem}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.presseditem}
      >
        <Text style={styles.colorText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalitem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#ABD9FF",
  },
  colorText: {
    color: "white",
    padding: 8,
    borderRadius: 6,
  },
  presseditem: {
    backgroundColor:'red',
    opacity: 0.5

  },
});
