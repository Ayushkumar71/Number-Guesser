import { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  // not much was known about this line at the time.
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  function pickedNumberHandler(enteredUserNumber) {
    setUserNumber(enteredUserNumber);
    setGameIsOver(false);
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setRoundNumber(0);
  }
  function gameOverHandler(guessRoundLength) {
    setGameIsOver(true);
    setRoundNumber(guessRoundLength);
  }

  let screen = <StartGameScreen onPressConfirm={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={roundNumber}
        startNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={["#C4ACC8", "#FFFFC7"]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        resizeMode="cover"
        source={require("./assets/images/MainScreen-Background.jpg")}
        imageStyle={styles.ImageContainer}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen /* internally a component so the screen will get rendered*/}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rootScreen: {
    flex: 1,
    backgroundColor: "#CFA9D65A",
  },
  ImageContainer: {
    opacity: 0.1,
  },
});
