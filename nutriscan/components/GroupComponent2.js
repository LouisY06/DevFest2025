import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Gap } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent2 = ({
  groupViewLeft,
  groupViewTop,
  ellipse5,
  moreBuff,
  proteinEater,
}) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("left", groupViewLeft),
      ...getStyleValue("top", groupViewTop),
    };
  }, [groupViewLeft, groupViewTop]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupView1Style]}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <View>{ellipse5 && ellipse5}</View>
      <View style={[styles.moreBuffParent, styles.groupItemPosition]}>
        <Text style={[styles.moreBuff, styles.moreBuffFlexBox]}>
          {moreBuff}
        </Text>
        <Text style={[styles.proteinEater, styles.moreBuffFlexBox]}>
          {proteinEater}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 171,
    width: 155,
    position: "absolute",
  },
  groupItemPosition: {
    left: 20,
    position: "absolute",
  },
  moreBuffFlexBox: {
    textAlign: "left",
    color: Color.grey700,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
  },
  moreBuff: {
    fontSize: FontSize.headline4_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.headline5,
  },
  proteinEater: {
    fontSize: FontSize.headline6_size,
    fontFamily: FontFamily.interRegular,
  },
  moreBuffParent: {
    top: 107,
    gap: Gap.gap_md,
  },
  rectangleParent: {
    top: 397,
    left: 32,
  },
});

export default GroupComponent2;
