import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputcontainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textinput}
          placeholder="Your Course Goal !"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='' />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor:'#ABD9FF'
  },
  textinput: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor:'white',
    width: "100%",
    borderRadius:10,
    padding: 9,
  },
  buttoncontainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image:{
    width:100,
    height:100,
    margin:20,

  }
});
