import { View, Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

function LogItem() {
  return (
    <View style={styles.logitem}>
      <Text style={styles.logText}> # </Text>
      <Text style={styles.logText}>Opponent's guess: </Text>
    </View>
  );
}

export default LogItem();

const styles = StyleSheet.create({
  logitem: {
    borderWidth: 1,
    borderRadius: 24,
    width: "100%",
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.Background,
    elevation: 4,
  },
  logText: {
    fontFamily: "open-sans",
  },
});
