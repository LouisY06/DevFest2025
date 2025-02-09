import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({ groupViewTop, groupViewLeft, addEatingHabit }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
      ...getStyleValue("left", groupViewLeft),
    };
  }, [groupViewTop, groupViewLeft]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupViewStyle]}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <View style={styles.addEatingHabitWrapper}>
        <Text style={styles.addEatingHabit}>{addEatingHabit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 157,
    width: 333,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
  },
  addEatingHabit: {
    fontSize: FontSize.headline4_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.headline5,
    color: Color.grey700,
    textAlign: "left",
  },
  addEatingHabitWrapper: {
    top: 98,
    left: 43,
    width: 185,
    height: 43,
    position: "absolute",
  },
  rectangleParent: {
    top: 102,
    left: 26,
  },
});

export default GroupComponent;
