import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Rectangle5 = () => {
  return <ImageBackground style={styles.icon} resizeMode="cover" />;
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    width: "100%",
    height: 50,
  },
});

export default Rectangle5;
