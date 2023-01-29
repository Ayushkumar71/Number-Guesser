import { View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

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
});
