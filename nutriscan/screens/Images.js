import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Images = () => {
  return <ImageBackground style={styles.images2Icon} resizeMode="cover" />;
};

const styles = StyleSheet.create({
  images2Icon: {
    flex: 1,
    width: "100%",
    height: 50,
  },
});

export default Images;
