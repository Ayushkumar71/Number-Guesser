import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../../constants/colors";

function GuessLogitem({ Guess, userNumber }) {
  return (
    <LinearGradient
      colors={["#C2A8D2", "#BC9FCE", "#C2A8D2"]}
      style={styles.logitemContainer}
    >
      <View style={styles.logitem}>
        <Text style={styles.logText}>{Guess}.</Text>
        <Text style={styles.logText}>Guess - {userNumber}</Text>
      </View>
    </LinearGradient>
  );
}

export default GuessLogitem;
const styles = StyleSheet.create({
  logitem: {
    width: "100%",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logitemContainer: {
    borderRadius: 16,
    marginVertical: 8,
    overflow: "hidden",
  },
  logText: {
    fontFamily: "open-sans",
  },
});
