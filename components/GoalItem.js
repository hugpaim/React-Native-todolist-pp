import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this,props.id)}>
      <View style={styles.goalitem}>
        <Text style={styles.colorText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalitem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#87A2FB",
    padding: 8,
  },
  colorText: {
    color: "white",
  },
});
