import { View, Text, StyleSheet, Pressable } from "react-native";

import colors from "../../constants/colors";

// This custom button can now be used anywhere in the app by using tag(choose a better name)
// children refers to what is inclosed inside the component's tags.
function PrimaryButton({ children, onPress, style }) {
  return (
    <View style={styles.ButtonOuterContainer}>
      <Pressable
        style={[styles.ButtonInnerContainer, style]}
        onPress={onPress}
        android_ripple={{ color: colors.Button300 }}
      >
        <Text style={styles.ButtonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  ButtonOuterContainer: {
    borderRadius: 16, // this is neccessary here as it prevents ripple from leaking in corners.
    margin: 4,
    elevation: 3,
    overflow: "hidden", // this is making the button look circular by cutting it.
  },
  ButtonInnerContainer: {
    backgroundColor: colors.Button200,
    paddingVertical: 8,
  },
  ButtonText: {
    fontSize: 15,
    fontFamily: "open-sans-bold",
    color: "black",
    textAlign: "center",
  },
});
