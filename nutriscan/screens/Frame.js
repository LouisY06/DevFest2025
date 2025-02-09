import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Intropage from "../assets/intro-page.svg";

const Frame = () => {
  return (
    <View style={styles.introPageParent}>
      <Intropage style={styles.introPageIcon} width={390} height={844} />
    </View>
  );
};

const styles = StyleSheet.create({
  introPageIcon: {
    position: "absolute",
    top: 0,
    left: -3,
    overflow: "hidden",
  },
  introPageParent: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Frame;
