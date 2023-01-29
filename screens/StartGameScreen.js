import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import colors from "../constants/colors";
import Card from "../components/UI/Card";

function StartGameScreen({ onPressConfirm }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function enteredNumberHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const InputNumber = parseInt(enteredNumber);

    // For Alert Message
    if (isNaN(InputNumber) || InputNumber <= 0) {
      Alert.alert("Invalid Input", "Please add a number between 0 and 100.", [
        {
          // Button attributes here are written in CSS like code and not JSX like
          text: "My bad",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    // to change userNumber state in App.js
    onPressConfirm(InputNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Enter a number</Title>
      <Card>
        <TextInput
          style={styles.NumberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={enteredNumberHandler}
          // Significance of the line below wasn't known at the time.
          value={enteredNumber}
        />
        <View style={styles.ButtonsContainer}>
          <View style={styles.ButtonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.ButtonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 33,
    marginHorizontal: 6,
    padding: 16,
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: colors.Background,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  NumberInput: {
    height: 46,
    width: 50,
    marginVertical: 12,
    color: colors.Text200,
    fontSize: 32,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    borderBottomColor: colors.TextBorder300,
    borderBottomWidth: 2,
  },
  ButtonsContainer: {
    marginTop: 6,
    flexDirection: "row",
  },
  ButtonContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 24,
  },
});
