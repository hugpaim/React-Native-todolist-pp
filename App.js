import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text:enteredGoalText, id: Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textinput}
          placeholder="Your Course Goal !"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsinput}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}/>;
            }}
            keyExtractor={(item, index)=>{
              return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsinput: {
    flex: 5,
  },
 
});
