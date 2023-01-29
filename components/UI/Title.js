import { Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 21.5,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    color: colors.Text100,
    padding: 8,
    paddingTop: 10,
    marginBottom: 20,
    borderRadius: 2,
    borderColor: "#2C1C2F7A",
    borderWidth: 2,
  },
});
