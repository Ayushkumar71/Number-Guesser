import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function enteredNumberHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const InputNumber = parseInt(enteredNumber);
    if (isNaN(InputNumber) || InputNumber <= 0) {
      Alert.alert("Invalid Input", "Please add a number between 0 and 100.", [
        {
          // the button attributes are written in CSS like code and not JSX like
          text: "My bad",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    console.log("Valid Input! ");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.NumberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={enteredNumberHandler}
        value={enteredNumber}
        // what is this even neccessary, he says that this is to make it able to change
        // state from anywhere in the app.
      />
      <View style={styles.ButtonsContainer}>
        <View style={styles.ButtonContainer}>
          <PrimaryButton buttonHandler={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.ButtonContainer}>
          <PrimaryButton buttonHandler={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: "#FEFEE3",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  NumberInput: {
    height: 50,
    width: 50,
    marginVertical: 12,
    color: "#472C90A1",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: "#8376A5E1",
    borderBottomWidth: 2,
  },
  ButtonsContainer: {
    marginTop: 6,
    flexDirection: "row",
  },
  ButtonContainer: {
    flex: 1,
  },
});
