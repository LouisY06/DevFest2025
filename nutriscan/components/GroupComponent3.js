import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily, Gap } from "../GlobalStyles";

const GroupComponent3 = ({ moreBuff, proteinEater }) => {
  return (
    <View style={styles.groupChildPosition}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={styles.moreBuffParent}>
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
  groupChildPosition: {
    height: 157,
    width: 333,
    left: 0,
    top: 0,
    position: "absolute",
  },
  moreBuffFlexBox: {
    textAlign: "left",
    color: Color.grey700,
  },
  groupChild: {
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
    top: 98,
    left: 43,
    width: 185,
    height: 43,
    gap: Gap.gap_md,
    position: "absolute",
  },
});

export default GroupComponent3;
