import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Group44 from "../assets/group-44.svg";

const Group = () => {
  return (
    <View style={styles.groupParent}>
      <Group44 style={styles.groupChild} width={50} height={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 50,
  },
});

export default Group;
