import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Vector from "../assets/vector.svg";

const PhbowlFoodFill = () => {
  return (
    <View style={styles.phbowlFoodFill}>
      <Vector style={styles.vectorIcon} width={81} height={78} />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    top: "9.35%",
    right: "9.35%",
    bottom: "12.58%",
    left: "9.35%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  phbowlFoodFill: {
    flex: 1,
    width: "100%",
    height: 31,
  },
});

export default PhbowlFoodFill;
