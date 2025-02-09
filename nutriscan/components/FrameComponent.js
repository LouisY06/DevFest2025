import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Gap, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({
  frameViewTop,
  frameViewLeft,
  frameViewLeft1,
  prop,
  halal,
  leo,
  leoFontFamily,
  frame,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", frameViewTop),
      ...getStyleValue("left", frameViewLeft),
    };
  }, [frameViewTop, frameViewLeft]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("left", frameViewLeft1),
    };
  }, [frameViewLeft1]);

  const leoStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", leoFontFamily),
    };
  }, [leoFontFamily]);

  return (
    <View style={[styles.frameParent, frameViewStyle]}>
      <View style={[styles.parent, styles.parentPosition, frameView1Style]}>
        <Text style={[styles.text, styles.textFlexBox]}>{prop}</Text>
        <Text style={[styles.halal, styles.textFlexBox]}>{halal}</Text>
      </View>
      <View style={[styles.leoParent, styles.parentPosition]}>
        <Text style={[styles.leo, styles.leoFlexBox, leoStyle]}>{leo}</Text>
        <Text style={[styles.jan2022, styles.leoFlexBox]}>10 jan 2022</Text>
      </View>
      <View style={[styles.frameChild, styles.framePosition]} />
      <Image
        style={[styles.frameIcon1, styles.framePosition]}
        contentFit="cover"
        source={frame}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    gap: Gap.gap_md,
    top: 15,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "right",
    lineHeight: 20,
  },
  leoFlexBox: {
    textAlign: "left",
    color: Color.grey900,
  },
  framePosition: {
    height: 65,
    width: 65,
    left: 7,
    top: 7,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.headline6,
    color: Color.grey900,
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.headline5_size,
  },
  halal: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.grey700,
    fontSize: FontSize.size_xs,
  },
  parent: {
    left: 277,
    alignItems: "flex-end",
  },
  leo: {
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.headline5_size,
    textAlign: "left",
  },
  jan2022: {
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  leoParent: {
    left: 84,
  },
  frameChild: {
    borderRadius: Border.br_13xl_5,
    backgroundColor: Color.grey500,
  },
  frameIcon1: {
    overflow: "hidden",
  },
  frameParent: {
    top: 186,
    left: 31,
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 327,
    height: 79,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FrameComponent;
