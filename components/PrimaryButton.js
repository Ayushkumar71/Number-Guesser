import { View, Text, StyleSheet, Pressable } from "react-native";

// children refers to what is inclosed inside the component tags.
function PrimaryButton({ children, buttonHandler }) {
  return (
    <View style={styles.ButtonOuterContainer}>
      <Pressable
        style={styles.ButtonInnerContainer}
        onPress={buttonHandler}
        android_ripple={{ color: "#B18AB7" }}
      >
        <Text style={styles.ButtonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  ButtonOuterContainer: {
    borderRadius: 16, // this is neccessary here as it prevents ripple from leaking
    margin: 4,
    elevation: 3,
    overflow: "hidden", // this is making the button look circular by cutting it
  },
  ButtonInnerContainer: {
    backgroundColor: "#BC9EC1",
    paddingVertical: 8,
  },
  ButtonText: {
    color: "black",
    textAlign: "center",
  },
});
