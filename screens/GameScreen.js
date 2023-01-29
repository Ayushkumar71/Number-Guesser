import { useState, useEffect } from "react";
import { Text, StyleSheet, View, Alert, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/UI/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import GuessLogitem from "../components/UI/GuessLogitem";

// The logic used therein includes "min" & exculdes "max"
function randomNumberPicker(min, max, exclude) {
  let ranNum = Math.floor(Math.random() * (max - min) + min);
  if (ranNum === exclude) {
    randomNumberPicker();
  } else {
    return ranNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  /* Since the line below is used only once we replace the variables with raw data as 
     when min = max in the last itteration, the above function enters in an infinite loop. */

  const initialGuess = randomNumberPicker(1, 100, userNumber);
  const [GuessNumber, setGuessNumber] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (GuessNumber === userNumber) {
      // And then switches to gameOver screen.
      onGameOver(guessRounds.length);
    }
    return;
  }, [GuessNumber, userNumber, onGameOver]);

  // runs once, when the component is called( and rendered) for the first time
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    // When an Invalid choice is made.
    if (
      (direction === "lower" && GuessNumber < userNumber) ||
      (direction === "higher" && GuessNumber > userNumber)
    ) {
      Alert.alert("Invalid choice", "Choose a valid option. ", [
        { Text: "Ok", style: "destructive" },
      ]);
      // this return does a really good job by returning the app to its last state.
      return;
    }

    // for basic functionality of the button.
    if (direction === "lower") {
      maxBoundary = GuessNumber;
    } else {
      minBoundary = GuessNumber + 1;
    }

    const newRanNum = randomNumberPicker(minBoundary, maxBoundary, GuessNumber);
    setGuessNumber(newRanNum);
    setGuessRounds((prevGuessRounds) => [newRanNum, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.rootContainer}>
      <Title>App is guessing..</Title>
      <Card>
        <Text style={styles.numberText}>{GuessNumber}</Text>
      </Card>
      <LinearGradient
        colors={["#C2A8D2", "#BC9FCE", "#C2A8D2"]}
        style={styles.buttonsContainer}
      >
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={22} />
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <Ionicons name="md-add" size={22} />
          </PrimaryButton>
        </View>
      </LinearGradient>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogitem
              Guess={guessRoundsListLength - itemData.index}
              userNumber={itemData.item}
            />
          )}
          keyExtractor={(itemData) => itemData}
        />
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 24,
  },
  numberText: {
    fontSize: 31,
    fontFamily: "open-sans-bold",
    color: colors.Text200,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 8,
    marginHorizontal: 6,
    borderRadius: 18,
    backgroundColor: "#CAADD1",
  },
  buttonContainer: {
    flex: 1,
    padding: 8,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
