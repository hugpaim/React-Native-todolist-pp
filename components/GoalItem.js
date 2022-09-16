import { StyleSheet, View, Text } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalitem}>
      <Text style={styles.colorText}>{props.text}</Text>
    </View>
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
