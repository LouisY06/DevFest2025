import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Unknown = () => {
  return <ImageBackground style={styles.unknown13Icon} resizeMode="cover" />;
};

const styles = StyleSheet.create({
  unknown13Icon: {
    flex: 1,
    width: "100%",
    height: 50,
  },
});

export default Unknown;
