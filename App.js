import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#BC9EC1", "#FFFFC7"]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        resizeMode="cover"
        source={require("./assets/images/MainScreen-Background.jpg")}
        imageStyle={styles.ImageContainer}
      >
        <StartGameScreen />
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
    opacity: 0.25,
  },
});
