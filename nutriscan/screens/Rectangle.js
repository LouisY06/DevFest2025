import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Rectangle = () => {
  return (
    <ImageBackground
      style={styles.icon}
      resizeMode="cover"
      source={require("../assets/98498782.png")}
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

export default Rectangle;
