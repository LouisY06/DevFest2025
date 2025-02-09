import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Rectangle2 = () => {
  return (
    <ImageBackground
      style={styles.icon}
      resizeMode="cover"
      source={require("../assets/179267112.png")}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    width: "100%",
    height: 60,
  },
});

export default Rectangle2;
