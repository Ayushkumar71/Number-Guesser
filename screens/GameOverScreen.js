import { View, Text, StyleSheet, Image } from "react-native";

import Title from "../components/UI/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({ userNumber, roundNumber, startNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title style={styles.title}>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/GameOver-Image.jpg")}
        />
      </View>
      <Text style={styles.summaryText}>
        Needed <Text style={styles.highlightText}>{roundNumber}</Text> chances
        to guess
        <Text style={styles.highlightText}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={startNewGame} style={styles.button}>
        New Game
      </PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margintop: 80,
    padding: 24,
    paddingBottom: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 98,
    borderWidth: 2,
    marginTop: 15,
    overflow: "hidden",
  },
  image: {
    width: "103%",
    height: "107%",
  },
  summaryText: {
    fontSize: 19,
    color: colors.Text200,
    fontFamily: "open-sans",
    textAlign: "center",
    marginVertical: 20,
  },
  highlightText: {
    fontFamily: "open-sans",
    color: colors.Text200,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  title: {
    paddingHorizontal: 40,
  },
});
